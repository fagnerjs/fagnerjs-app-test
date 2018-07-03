import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { CameraService } from '../../providers/camera-service/camera-service';

import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  phone: string;
  form: FormGroup;
  value: any;
  loading: Loading
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private auth: AuthServiceProvider,
    private loadingCtrl: LoadingController,
    private cameraService: CameraService
  ) {
    this.form = this.formBuilder.group({
      phone: [null, [
        Validators.required,
        Validators.pattern(/^(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gm)
      ]]
    });

    this.value = this.navParams.data;
  }

  ionViewDidLoad() {
    this.cameraService.getMedia().then(r => {
      console.log('aaaa')
    })
    this.form.get('phone').valueChanges.subscribe(v => {
      v = v || '';
      v = v
        .replace(/\D/g,"")
        .replace(/^(\d{2})(\d)/g,"($1) $2")
        .replace(/(\d)(\d{4})$/,"$1-$2");
      this.form.get('phone').setValue(v, {emitEvent:false});
    });
  }

  submit():void {
    if(!this.form.valid) {
      const alert = this.alertCtrl.create({
        title: 'Por favor, insira um número de telefone válido',
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

    this.auth.check({phone:this.form.get('phone').value})
      .then(() => {
        this.loading.dismiss().then(() => {
          this.navCtrl.push(LoginPage,
            Object.assign(this.value, JSON.parse(JSON.stringify(this.form.value)))
          );
        })
      }).catch(error => {
        this.loading.dismiss().then(() => {
          if(error.status == 404) {
            this.navCtrl.push(SignupPage,
              Object.assign(this.value, JSON.parse(JSON.stringify(this.form.value)))
            );
          }
        })
      });
  }

  showLoading(message:string = ''): void {
    this.loading = this.loadingCtrl.create({
      content: message || 'Aguarde...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

}
