import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { MenuPage } from '../menu/menu';
import { ServiceHiredProfilePage } from '../service-hired-profile/service-hired-profile';

// No modo completo, ira direcionar pra ServiceSettings
//import { ServiceSettingsPage } from '../service-settings/service-settings';

import { ServiceProviderPage } from '../service-provider/service-provider';

@IonicPage()
@Component({
  selector: 'page-select-service',
  templateUrl: 'select-service.html',
})
export class SelectServicePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
  }

  navigateToServices(param: boolean): void {
    // No modo completo, ira direcionar pra ServiceSettings
    //this.navCtrl.push(ServiceSettingsPage);

    this.navCtrl.push(ServiceProviderPage);
  }

  navigateToMenu(): void {
    this.navCtrl.push(MenuPage);
  }

  servicePreview(item:any) {
    const modal = this.modalCtrl.create(ServiceHiredProfilePage, item);
    modal.present();
  }

}
