import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';

import { MenuPage } from '../menu/menu';
import { ProviderProfilePage } from '../provider-profile/provider-profile';
import { UsersServiceProvider } from '../../providers/users-service/users-service';


@IonicPage()
@Component({
  selector: 'page-service-provider',
  templateUrl: 'service-provider.html',
})
export class ServiceProviderPage {
  value: any;

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
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private userService: UsersServiceProvider
  ) {
    this.value = this.navParams.data;
  }

  ionViewDidLoad() {
    this.userService.searchByGeo({geo:'-23.535809, -46.651249'}).then(result => {
      this.providers = result.body;
    }).catch(err => {
      this.providers = JSON.parse(JSON.stringify(this.providersModel));
    });
  }

  selectProvider(id:string): void {
    this.navCtrl.push(ProviderProfilePage, {
      provider: id,
      service_params: this.value
    })
  }

  navigateToMenu(): void {
    this.navCtrl.push(MenuPage);
  }

  back() {
    this.navCtrl.pop();
  }

}
