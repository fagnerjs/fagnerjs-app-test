import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, Loading, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SelectServicePage } from '../select-service/select-service';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

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
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
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
      .then((result:any) => {
        this.loading.dismiss().then(() => this.navCtrl.push(
          result.data.user.isPasswordGenerated ? ForgotPasswordPage : SelectServicePage, Object.assign(result.data.user, {scope: 'change'})
        ));
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

  forgotPassword() {
    const modal = this.modalCtrl.create(ForgotPasswordPage, Object.assign(this.form.value, {
      scope: 'email'
    }));
    modal.present();
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
