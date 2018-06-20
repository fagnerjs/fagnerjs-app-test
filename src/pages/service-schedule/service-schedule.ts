import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuPage } from '../menu/menu';
import { ServiceProviderPage } from '../service-provider/service-provider';

@Component({
  selector: 'page-service-schedule',
  templateUrl: 'service-schedule.html',
})
export class ServiceSchedulePage {
  value: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.value = this.navParams.data;
  }

  ionViewDidLoad() {}

  schedule(param:string):void {
    this.navCtrl.push(ServiceProviderPage,
      Object.assign(this.value, {schedule: param})
    );
  }

  navigateToMenu(): void {
    this.navCtrl.push(MenuPage);
  }

  back() {
    this.navCtrl.pop();
  }

}
