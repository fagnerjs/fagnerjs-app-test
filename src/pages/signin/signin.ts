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
  phone: string;
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
        Validators.pattern(/^(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gm)
      ]]
    });
  }

  ionViewDidLoad() {
    this.form.get('phone').valueChanges.subscribe(v => {
      v = v || '';
      v = v
        .replace(/\D/g,"")
        .replace(/^(\d{2})(\d)/g,"($1) $2")
        .replace(/(\d)(\d{4})$/,"$1-$2");
      this.form.get('phone').setValue(v, {emitEvent:false});
    })
  }

  signin():void {
    console.log(this.form.value)
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

    this.navCtrl.push(SignupPage, this.form.value);
  }

}
