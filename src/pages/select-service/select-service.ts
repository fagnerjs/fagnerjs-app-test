import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { MenuPage } from '../menu/menu';
import { ServiceHiredProfilePage } from '../service-hired-profile/service-hired-profile';

import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
import configs from '../../app/config';

// No modo completo, ira direcionar pra ServiceSettings
//import { ServiceSettingsPage } from '../service-settings/service-settings';

import { ServiceProviderPage } from '../service-provider/service-provider';

@IonicPage()
@Component({
  selector: 'page-select-service',
  templateUrl: 'select-service.html',
})
export class SelectServicePage {
  initiate: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private geolocation : Geolocation,
    private storage: Storage
  ) {}

  ionViewDidLoad() {
    this.geolocation
      .watchPosition({enableHighAccuracy : true})
      .subscribe((data) => {
        configs.location.latitude = data.coords.latitude;
        configs.location.longitude = data.coords.longitude;

        if(!this.initiate) {
          return
        }

        this.storage.get('settings').then(settings => {
          if(!settings) {
            this.storage.set('settings', configs.settings).then(() => {});
            return;
          }
          configs.settings = settings;
          this.initiate = true;
        });
      }, err => {
      });
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
