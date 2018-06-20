import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import configs from '../../app/config';
import { SelectServicePage } from '../select-service/select-service';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  user: any = configs.settings.auth.user;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  close() {
    this.navCtrl.pop();
  }

  navigation(page:string): void {
    switch(page) {
      case 'select-service':
        this.navCtrl.push(SelectServicePage);
        break;
    }
  }

}
