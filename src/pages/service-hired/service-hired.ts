import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';

import { MenuPage } from '../menu/menu';
import { SelectServicePage } from '../select-service/select-service';

import Util from '../../shared/util/util';

@IonicPage()
@Component({
  selector: 'page-service-hired',
  templateUrl: 'service-hired.html',
})
export class ServiceHiredPage {
  value: any;
  private util: Util = new Util();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    this.value = this.navParams.data;
  }

  ionViewDidLoad() {}

  close():void {
    this.navCtrl.push(SelectServicePage);
  }

  back() {
    this.navCtrl.pop();
  }

}
