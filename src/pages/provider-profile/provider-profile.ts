import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';

import { MenuPage } from '../menu/menu';
import { ProviderSchedulePage } from '../provider-schedule/provider-schedule';

@IonicPage()
@Component({
  selector: 'page-provider-profile',
  templateUrl: 'provider-profile.html',
})
export class ProviderProfilePage {
  value: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    this.value = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log(this.value)
  }

  selectProvider(): void {
    this.navCtrl.push(ProviderSchedulePage, this.value);
  }

  back() {
    this.navCtrl.pop();
  }

}
