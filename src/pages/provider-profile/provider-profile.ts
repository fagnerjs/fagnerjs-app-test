import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

import { CallNumber } from '@ionic-native/call-number';
import { SocialSharing } from '@ionic-native/social-sharing';

import { ProviderSchedulePage } from '../provider-schedule/provider-schedule';

@Component({
  selector: 'page-provider-profile',
  templateUrl: 'provider-profile.html',
})
export class ProviderProfilePage {
  value: any;

  private _providerModel = {
    _id: null,
    profile_type: null,
    first_name: null,
    last_name: null,
    email: null,
    description: null,
    phone: null,
    services: []
  }

  provider: any = JSON.parse(JSON.stringify(this._providerModel));

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private callNumber: CallNumber,
    private platform: Platform,
    private socialSharing: SocialSharing
  ) {
    this.value = this.navParams.data;
    this.provider = this.value.provider;
  }

  ionViewDidLoad() {}

  selectProvider(): void {
    this.navCtrl.push(ProviderSchedulePage, this.value);
  }

  shareViaWhatsApp(item:any):void {
    if(this.platform.is('ios') || this.platform.is('android')) {
      this.socialSharing.shareViaWhatsAppToReceiver(item.phone, 'Olá, te vi no uberservice. Queria contratar seu serviço', null, null).then(() => {
        // métricas whatsapp
      });
    }
  }

  call(item:any): void {
    if(this.platform.is('ios') || this.platform.is('android')) {
      this.callNumber.callNumber(item.phone, true)
        .then(res => {
          // métricas de click no telefone
        })
        .catch(err => {
        });
    }
  }

  back() {
    this.navCtrl.pop();
  }

}
