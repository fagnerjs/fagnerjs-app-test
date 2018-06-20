import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SelectServicePage } from '../select-service/select-service';

@Component({
  selector: 'page-service-hired',
  templateUrl: 'service-hired.html',
})
export class ServiceHiredPage {
  value: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
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
