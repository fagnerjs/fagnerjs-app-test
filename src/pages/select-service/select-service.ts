import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController, Loading, AlertController } from 'ionic-angular';

import { MenuPage } from '../menu/menu';
import { ServiceHiredProfilePage } from '../service-hired-profile/service-hired-profile';

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
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
  }

  navigateToServices(param: boolean): void {
    console.log(param)
  }

  navigateToMenu(): void {
    this.navCtrl.push(MenuPage);
  }

  servicePreview(item:any) {
    const modal = this.modalCtrl.create(ServiceHiredProfilePage, item);
    modal.present();
  }

}
