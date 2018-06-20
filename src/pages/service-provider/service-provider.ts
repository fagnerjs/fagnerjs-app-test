import { Component } from '@angular/core';
import { NavController, NavParams, Platform, LoadingController, Loading } from 'ionic-angular';

import { MenuPage } from '../menu/menu';
import { ProviderProfilePage } from '../provider-profile/provider-profile';
import { UsersServiceProvider } from '../../providers/users-service/users-service';

import { CallNumber } from '@ionic-native/call-number';
import { SocialSharing } from '@ionic-native/social-sharing';
import config from '../../app/config';

@Component({
  selector: 'page-service-provider',
  templateUrl: 'service-provider.html',
})
export class ServiceProviderPage {
  value: any;
  loading: Loading;
  providersModel:any = {
    error: false,
    messages: [],
    data: {
      pagination: {
        pages: null,
        current: null,
        next: null,
        prev: null,
        from: null,
        total_items: null
      },
      items:[]
    }
  }

  providers:any = JSON.parse(JSON.stringify(this.providersModel));

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userService: UsersServiceProvider,
    private callNumber: CallNumber,
    private platform: Platform,
    private socialSharing: SocialSharing,
    private loadingCtrl: LoadingController
  ) {
    this.value = this.navParams.data;
  }

  ionViewDidLoad(): void {
    this.showLoading();
    this.userService.searchByGeo({geo:`${config.location.latitude},${config.location.longitude}`}).then(result => {
      this.providers = result.body;
      this.loading.dismiss();
    }).catch(err => {
      this.loading.dismiss().then(() => {
        this.providers = JSON.parse(JSON.stringify(this.providersModel));
      });
    });
  }

  selectProvider(id:string): void {
    this.navCtrl.push(ProviderProfilePage, {
      provider: id,
      service_params: this.value
    })
  }

  selectContact(type:string, provider:any) {
    switch(type) {
      case 'whatsapp':
        this.shareViaWhatsApp(provider);
        break;
      default:
        this.call(provider);
    }
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

  navigateToMenu(): void {
    this.navCtrl.push(MenuPage);
  }

  showLoading(message:string = ''): void {
    this.loading = this.loadingCtrl.create({
      content: message || 'Aguarde...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  back() {
    this.navCtrl.pop();
  }
}
