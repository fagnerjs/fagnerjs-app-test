import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-service-provider-rate',
  templateUrl: 'service-provider-rate.html',
})
export class ServiceProviderRatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceProviderRatePage');
  }

}
