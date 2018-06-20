import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { ServiceCancelPage } from '../service-cancel/service-cancel';

@Component({
  selector: 'page-service-hired-profile',
  templateUrl: 'service-hired-profile.html',
})
export class ServiceHiredProfilePage {
  params: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {
    this.params = this.navParams.data;
  }

  ionViewDidLoad() {
  }

  close() {
    this.viewCtrl.dismiss();
  }

  cancel() {
    this.navCtrl.push(ServiceCancelPage, this.params);
  }

}
