import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';

import { MenuPage } from '../menu/menu';
import { ServiceSettingsPage } from '../service-settings/service-settings';

@IonicPage()
@Component({
  selector: 'page-select-service',
  templateUrl: 'select-service.html',
})
export class SelectServicePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
  }

  navigateToServices(param: boolean): void {
    console.log(param)
  }

  navigateToMenu(): void {
    this.navCtrl.push(MenuPage);
  }

}
