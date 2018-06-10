import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';

import { MenuPage } from '../menu/menu';
import { ServiceProviderPage } from '../service-provider/service-provider';

@IonicPage()
@Component({
  selector: 'page-service-schedule',
  templateUrl: 'service-schedule.html',
})
export class ServiceSchedulePage {
  value: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    this.value = this.navParams.data;
  }

  ionViewDidLoad() {}

  schedule(param:string):void {
    this.navCtrl.push(ServiceProviderPage,
      Object.assign(this.value, {schedule: param})
    );
  }

  navigateToMenu(): void {
    this.navCtrl.push(MenuPage);
  }

  back() {
    this.navCtrl.pop();
  }

}
