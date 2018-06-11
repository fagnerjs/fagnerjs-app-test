import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { FormBuilder, FormArray, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

import { MenuPage } from '../menu/menu';
import { ProviderPlacePage } from '../provider-place/provider-place';

@IonicPage()
@Component({
  selector: 'page-provider-schedule',
  templateUrl: 'provider-schedule.html',
})
export class ProviderSchedulePage {
  value: any;
  form: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    this.form = this.formBuilder.group({
      day: [null, [Validators.required]],
      time: [null, [Validators.required]]
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
      const alert = this.alertCtrl.create({
        title: 'Preencha o dia e horário',
        subTitle: null,
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

    this.navCtrl.push(ProviderPlacePage,
      Object.assign(this.value, JSON.parse(JSON.stringify(this.form.value)))
    );
  }

  back() {
    this.navCtrl.pop();
  }

}
