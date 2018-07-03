import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';
import { MenuPage } from '../menu/menu';
import { ServiceHiredProfilePage } from '../service-hired-profile/service-hired-profile';

import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
import configs from '../../app/config';

// No modo completo, ira direcionar pra ServiceSettings
//import { ServiceSettingsPage } from '../service-settings/service-settings';

import { ServiceProviderPage } from '../service-provider/service-provider';

@Component({
  selector: 'page-select-service',
  templateUrl: 'select-service.html',
})
export class SelectServicePage {
  subscription: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private geolocation : Geolocation,
    private storage: Storage,
    private alertCtrl: AlertController,
    private diagnostic: Diagnostic,
    private openSettings: OpenNativeSettings
  ) {}

  ionViewDidLoad() {
    this.diagnostic.isLocationEnabled().then(state => {
      if(!state) {
        const alert = this.alertCtrl.create({
          title:  'Localização Desabilitada',
          subTitle: 'Parece que o serviço de localização está desabilitado. Habilite para que possamos localizar os melhores serviços para você.',
          buttons: [
            {
              text: 'Cancelar',
              handler: () => {
                this.diagnostic.registerLocationStateChangeHandler(() => {
                  this.getPosition();
                })
              }
            },
            {
              text: 'Habilitar',
              handler: () => {
                this.diagnostic.registerLocationStateChangeHandler(() => {
                  this.getPosition();
                });
                this.openSettings.open('location');
              }
            }
          ]
        });
        alert.present();
        return;
      }

      this.getPosition();
    });
  }

  getPosition() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.geolocation
      .watchPosition({enableHighAccuracy : true})
      .subscribe(data => {

        configs.location.latitude = data.coords.latitude;
        configs.location.longitude = data.coords.longitude;

        this.storage.get('_app-settings').then(settings => {
          if(!settings) {
            this.storage.set('_app-settings', configs.settings).then(() => {});
            return;
          }
          configs.settings = settings;
        });
      }, err => {
        const alert = this.alertCtrl.create({
          title:  'Erro',
          subTitle: 'Ocorreu um erro ao obter sua localização',
          buttons: [
            {
              text: 'Ok',
              handler: () => {
              }
            }
          ]
        });
        alert.present();
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
