import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MenuPage } from '../menu/menu';
import { ServiceSchedulePage } from '../service-schedule/service-schedule';

@IonicPage()
@Component({
  selector: 'page-service-settings',
  templateUrl: 'service-settings.html',
})
export class ServiceSettingsPage {
  form: FormGroup;
  value: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private formBuilder: FormBuilder,

  ) {
    this.form = this.formBuilder.group({
      place_setup: [null, [Validators.required]],
      place_rooms:[null, [Validators.required]],
      place_toilets:[null, [Validators.required]]
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

  submit() {
    if(!this.form.valid) {
      const alert = this.alertCtrl.create({
        title: 'Por favor, selecione os detalhes do local',
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

    this.navCtrl.push(ServiceSchedulePage,
      Object.assign(this.value, JSON.parse(JSON.stringify(this.form.value)))
    );
  }

  navigateToMenu(): void {
    this.navCtrl.push(MenuPage);
  }

  back() {
    this.navCtrl.pop();
  }

}
