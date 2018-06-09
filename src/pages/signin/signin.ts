import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { FormBuilder, FormArray, FormGroup, Validators, FormControl } from '@angular/forms';

import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  form: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    this.form = this.formBuilder.group({
      phone: [null, [
        Validators.required,
        Validators.maxLength(60),
        Validators.minLength(2)
      ]]
    });
  }

  ionViewDidLoad() {
    this.form = this.formBuilder.group({
      phone: [null, [
        Validators.required,
        Validators.pattern(/^\([1-9]{2}\) [0-9]{4,5}-[0-9]{4}$/)
      ]]
    });
  }

  signin():void {
    if(!this.form.valid) {
      const alert = this.alertCtrl.create({
        title: 'Numero inválido',
        subTitle: '',
        buttons: [
          {
            text: 'Ok',
            handler: () => {}
          }
        ]
      });
      alert.present();
    }
  }

}
