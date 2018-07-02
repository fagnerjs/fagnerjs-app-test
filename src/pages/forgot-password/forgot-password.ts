import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { SelectServicePage } from '../select-service/select-service';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { UsersServiceProvider } from '../../providers/users-service/users-service';

function passwordConfirming(c: AbstractControl): any {
  if(!c.parent || !c) return;
  const pwd = c.parent.get('password');
  const cpwd= c.parent.get('repassword')
  if(!pwd || !cpwd) return ;
  if (pwd.value !== cpwd.value) {
    return { invalid: true };
  }
}

@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  form: FormGroup;
  value: any;
  loading: Loading;
  scope: 'email';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private auth: AuthServiceProvider,
    private userService: UsersServiceProvider
  ) {
    this.scope = this.navParams.get('scope') || 'email';
    const formParams = this.scope == 'email' ? {
      email: [null, [
        Validators.required,
        Validators.email
      ]]
    } : {
      password: [null, [
        Validators.required,
        Validators.minLength(6)
      ]],
      repassword: [null, [
        Validators.required,
        Validators.minLength(6),
        passwordConfirming
      ]]
    }

    this.form = this.formBuilder.group(formParams);
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

      if(this.scope == 'email') {
        message.title = 'Por favor, insira um e-mail válido';
      }else {
        if(controls['repassword'].hasError('invalid')) {
          message.title = 'Senhas não coincidem';
          message.subtitle = 'Por favor, verifique as diferenças entre as senhas digitadas';
        }else {
          message.title = 'Preencha os campos de senha e confirmação de senha';
          message.subtitle = '';
        }
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

    if(this.scope == 'email') {
      this.auth.forgotPassword({phone:this.value.phone, email: this.form.value.email})
        .then(r => {
          this.loading.dismiss().then(() => {
            const alert = this.alertCtrl.create({
              title: 'Uma senha temporária foi enviada ao email cadastrado.',
              buttons: [
                {
                  text: 'Ok',
                  handler: () => {
                    this.navCtrl.pop();
                  }
                }
              ]
            });
            alert.present();
          });
        }).catch(err => {
          this.loading.dismiss().then(() => {
            const alert = this.alertCtrl.create({
              title: err.status == 404 ? 'E-mail não cadastrado' : 'Ocorreu um erro, tente novamente',
              buttons: [
                {
                  text: 'Ok',
                  handler: () => {}
                }
              ]
            });
            alert.present();
          });
        })
    }else {
      this.userService.update(this.value._id, {password: this.form.value.password})
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
