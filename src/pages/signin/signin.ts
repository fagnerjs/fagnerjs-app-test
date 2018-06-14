import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { FormBuilder, FormArray, FormGroup, Validators, FormControl } from '@angular/forms';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  phone: string;
  form: FormGroup;
  value: any;
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
        Validators.required,
        Validators.pattern(/^(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gm)
      ]]
    });

    this.value = this.navParams.data;
  }

  ionViewDidLoad() {
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

    this.auth.check({phone:this.form.get('phone').value})
      .then(() => {
        this.navCtrl.push(LoginPage,
          Object.assign(this.value, JSON.parse(JSON.stringify(this.form.value)))
        );
      }).catch(error => {
        if(error.status == 404) {
          this.navCtrl.push(SignupPage,
            Object.assign(this.value, JSON.parse(JSON.stringify(this.form.value)))
          );
        }
      });
  }

}
