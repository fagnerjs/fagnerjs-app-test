import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { SelectServicePage } from '../select-service/select-service';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

function passwordConfirming(c: AbstractControl): any {
  if(!c.parent || !c) return;
  const pwd = c.parent.get('password');
  const cpwd= c.parent.get('repassword')
  if(!pwd || !cpwd) return ;
  if (pwd.value !== cpwd.value) {
    return { invalid: true };
  }
}

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {
  form: FormGroup;
  value: any;
  loading: Loading;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private auth: AuthServiceProvider
  ) {
    this.form = this.formBuilder.group({
      password: [null, [
        Validators.required,
        Validators.minLength(6)
      ]],
      repassword: [null, [
        Validators.required,
        Validators.minLength(6),
        passwordConfirming
      ]]
    });
    this.value = this.navParams.data;
  }

  ionViewDidLoad() {
    for(const k in this.form.controls) {
      const control = this.form.controls[k];
      if(this.value[k]) {
        control.setValue(this.value[k]);
      }
    }
  }

  submit():void {
    const controls = this.form.controls;

    if(!this.form.valid) {
      let message = {title:'', subtitle:''};

      if(controls['repassword'].hasError('invalid')) {
        message.title = 'Senhas não coincidem';
        message.subtitle = 'Por favor, verifique as diferenças entre as senhas digitadas';
      }else {
        message.title = 'Preencha os campos de senha e confirmação de senha';
        message.subtitle = '';
      }

      const alert = this.alertCtrl.create({
        title: message.title,
        subTitle: message.subtitle,
        buttons: [
          {
            text: 'Ok',
            handler: () => {}
          }
        ]
      });
      alert.present();
      return;
    }

    this.showLoading();
    this.auth.create(Object.assign(this.value, JSON.parse(JSON.stringify(this.form.value))))
      .then(r => {
        this.loading.dismiss().then(() => this.navCtrl.push(SelectServicePage));
      })
      .catch(e => {
        const alert = this.alertCtrl.create({
          title: 'Falha',
          subTitle: 'Ocorreu um erro efetuar o cadastro',
          buttons: [
            {
              text: 'Ok',
              handler: () => {}
            }
          ]
        });
        alert.present();
      });
  }

  back() {
    this.navCtrl.pop();
  }

  showLoading(message:string = ''): void {
    this.loading = this.loadingCtrl.create({
      content: message || 'Aguarde...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

}
