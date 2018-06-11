import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';

import { MenuPage } from '../menu/menu';
import { ServiceHiredPage } from '../service-hired/service-hired';

import Util from '../../shared/util/util';

@IonicPage()
@Component({
  selector: 'page-service-summary',
  templateUrl: 'service-summary.html',
})
export class ServiceSummaryPage {
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

  checkout():void {
    this.navCtrl.push(ServiceHiredPage, this.value);
  }

  back() {
    this.navCtrl.pop();
  }

}
