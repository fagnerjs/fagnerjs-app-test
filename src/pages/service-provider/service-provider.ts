import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';

import { MenuPage } from '../menu/menu';
import { ProviderProfilePage } from '../provider-profile/provider-profile';


@IonicPage()
@Component({
  selector: 'page-service-provider',
  templateUrl: 'service-provider.html',
})
export class ServiceProviderPage {
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

  selectProvider(id:string): void {
    this.navCtrl.push(ProviderProfilePage, {
      provider: id,
      service_params: this.value
    })
  }

  navigateToMenu(): void {
    this.navCtrl.push(MenuPage);
  }

  back() {
    this.navCtrl.pop();
  }

}
