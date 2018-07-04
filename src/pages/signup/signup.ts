import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PasswordPage } from '../password/password';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { CameraService } from '../../providers/camera-service/camera-service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  form: FormGroup;
  value: any;
  loading: Loading;
  profileImage: string;
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
      first_name: [null, [
        Validators.required
      ]],
      email: [null, [
        Validators.required,
        Validators.email
      ]],
      profile_image: [null, []]
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
        title: !this.form.get('first_name').valid ? 'Por favor, insira seu nome' : 'Por favor, insira um e-mail válido',
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

    this.auth.check({email:this.form.get('email').value}).then(() => {
      this.loading.dismiss().then(() => {
        const alert = this.alertCtrl.create({
          title: 'E-mail já cadastrado',
          subTitle: 'O e-mail digitado já está em uso',
          buttons: [
            {
              text: 'Ok',
              handler: () => {}
            }
          ]
        });
        alert.present();
      });
    }).catch(error => {
      this.loading.dismiss().then(() => {
        if(error.status == 404) {
          this.navCtrl.push(PasswordPage,
            Object.assign(this.value, JSON.parse(JSON.stringify(this.form.value)))
          );
        }else {
          const alert = this.alertCtrl.create({
            title: 'Falha',
            subTitle: 'Ocorreu uma falhar ao verificar o e-mail. Tente novamente',
            buttons: [
              {
                text: 'Ok',
                handler: () => {}
              }
            ]
          });
          alert.present();
        }
      });
    });
  }

  takePicture() {
    this.cameraService.takePhoto().then(imagePath => {
      this.profileImage = imagePath;
      this.form.get('profile_image').setValue(imagePath);
    });
  }

  getImage() {
    this.cameraService.getImage().then(imagePath => {
      this.profileImage = imagePath;
      this.form.get('profile_image').setValue(imagePath);
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
