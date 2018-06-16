import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { FormBuilder, FormArray, FormGroup, Validators, FormControl } from '@angular/forms';

import { SelectServicePage } from '../select-service/select-service';
import { SigninPage } from '../signin/signin';
import { PasswordPage } from '../password/password';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
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
      phone: [null, [
        Validators.required
      ]],
      password: [null, [
        Validators.required
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
    if(!this.form.valid) {
      const alert = this.alertCtrl.create({
        title: !this.form.get('password').valid ? 'Por favor, insira seu e-mail e sua senha' : 'Por favor, insira um e-mail válido',
        subTitle: '',
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

    this.auth.authenticate(this.form.get('phone').value, this.form.get('password').value)
      .then(result => {
        this.loading.dismiss().then(() => this.navCtrl.setRoot(SelectServicePage));
      }).catch(err => {
        this.loading.dismiss().then(() => {
          const alert = this.alertCtrl.create({
            title: err.status === 401 ? 'Não autorizado' : 'Falha no login',
            subTitle: err.status === 401 ? 'Telefone ou senha inválidos' : 'Tente novamente mais tarde',
            buttons: ['Ok']
          });
          alert.present();
        });
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
