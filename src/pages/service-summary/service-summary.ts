import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ServiceHiredPage } from '../service-hired/service-hired';

@Component({
  selector: 'page-service-summary',
  templateUrl: 'service-summary.html',
})
export class ServiceSummaryPage {
  value: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
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
