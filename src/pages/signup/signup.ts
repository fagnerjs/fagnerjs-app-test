import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { FormBuilder, FormArray, FormGroup, Validators, FormControl } from '@angular/forms';

import { PasswordPage } from '../password/password';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  form: FormGroup;
  value: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    this.form = this.formBuilder.group({
      first_name: [null, [
        Validators.required
      ]],
      email: [null, [
        Validators.required,
        Validators.email
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

    this.navCtrl.push(PasswordPage,
      Object.assign(this.value, JSON.parse(JSON.stringify(this.form.value)))
    );
  }

  back() {
    this.navCtrl.pop();
  }

}
