import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { FormBuilder, FormArray, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

import { MenuPage } from '../menu/menu';
import { ServiceSummaryPage } from '../service-summary/service-summary';

import Util from '../../shared/util/util';

@IonicPage()
@Component({
  selector: 'page-provider-place',
  templateUrl: 'provider-place.html',
})
export class ProviderPlacePage {
  value: any;
  form: FormGroup;
  private util: Util = new Util();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    this.form = this.formBuilder.group({
      postal_code: [null, [Validators.required]],
      address: [null, [Validators.required]],
      number: [null, [Validators.required]],
      complement: [null, [Validators.required]],
      neighborhood: [null, [Validators.required]]
    });
    this.value = this.navParams.data;

    // postal code mask
    this.form.get('postal_code').valueChanges.subscribe(v => {
      this.form.get('postal_code').setValue(
        this.util.mask(v,'#####-###'),
        {emitEvent:false}
      );
    });
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
        title: 'Preencha todos os campos',
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

    this.navCtrl.push(ServiceSummaryPage,
      Object.assign(this.value, {
        address: JSON.parse(JSON.stringify(this.form.value))
      })
    );
  }

  back() {
    this.navCtrl.pop();
  }

}
