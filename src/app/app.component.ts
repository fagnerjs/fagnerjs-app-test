import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, ModalController, MenuController, AlertController, LoadingController, Loading, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as moment from 'moment';

import { SigninPage } from '../pages/signin/signin';
import { ServiceSettingsPage } from '../pages/service-settings/service-settings';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { ServicesServiceProvider } from '../providers/services-service/services-service';
import { Storage } from '@ionic/storage';

import configs from '../app/config';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('mycontent') nav: NavController
  rootPage:any
  loading: Loading;

  settings = {}

  current: string;

  menuItems=[];

  constructor(
    platform: Platform,
    private alertCtrl: AlertController,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    modalCtrl: ModalController,
    private storage: Storage,
    private auth: AuthServiceProvider,
    private services: ServicesServiceProvider,
    private loadingCtrl: LoadingController,
    public events: Events,
    public menuCtrl: MenuController
  ) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      const perform = () => {
          this.rootPage = ServiceSettingsPage;
        // this.storage.get('settings').then(settings => {
        //   if(!settings || ((settings||{}).devices||[]).length == 0) {
        //     this.rootPage = IntroPage;
        //     return;
        //   }

        //   moment.locale('pt-BR');

        //   this.settings = settings;

        //   const stack = [];
        //   const containsDefault = settings.devices.filter(item => item.params.default === true)[0];
        //   if(containsDefault) {
        //     stack.push(() => new Promise((resolve, reject) => {
        //       this.auth
        //         .check(containsDefault.data.session, containsDefault.params)
        //         .subscribe(success => resolve(containsDefault), error => reject(error));
        //     }));
        //     this.showLoading();
        //     this.defineConnection(stack).then(r => this.bootstrap()).catch(err => {
        //       this.loading.dismiss();
        //       const alert = this.alertCtrl.create({
        //         title:  'Authorization failed',
        //         subTitle: 'Unable to connect to default device. Please check the parameters (host, port, usernam and password)',
        //         buttons: ['OK']
        //       });
        //       alert.present();
        //       this.rootPage = ListGrowPage;
        //       setTimeout(() => {
        //         this.nav.push(AddGrowPage, {id:containsDefault.id});
        //       },1);
        //     });
        //     return;
        //   }else {
        //     for(const item of settings.devices) {
        //       stack.push(() => new Promise((resolve, reject) => {
        //         this.auth
        //           .check(item.data.session, item.params)
        //           .subscribe(success => resolve(item), error => reject(error));
        //       }));
        //     }
        //   }

        //   this.showLoading();
        //   this.defineConnection(stack).then(r => this.bootstrap()).catch(err => {
        //     this.loading.dismiss();
        //     const alert = this.alertCtrl.create({
        //       title:  'Authorization failed',
        //       subTitle: 'Could not connect to any of the configured devices. Please check the parameters (host, port, usernam and password)',
        //       buttons: ['OK']
        //     });
        //     alert.present();
        //     this.rootPage = ListGrowPage;
        //   });
        // }).catch(err => {
        //   this.rootPage = IntroPage;
        // });
      }

      this.storage.get('settings').then(settings => {
        if(!settings) {
          this.storage.set('settings', this.settings).then(() => perform());
          return;
        }
        perform();
      });

      // const splash = modalCtrl.create(SplashPage);
      // splash.present();
    });

    // Update the menu
    // events.subscribe('devices:update', data => {
    //   if(data) {
    //     this.current = data.id;
    //   }
    //   this.storage.get('settings').then(settings => {
    //     if(!settings) {
    //       this.settings.devices = [];
    //       return;
    //     }
    //     this.settings.devices = settings.devices;
    //   });
    // });

    // this.http.connection.subscribe((isOnline) => {
    //   console.log(isOnline,'------------------>');
    // });
  }

  showLoading(message:string = ''): void {
    this.loading = this.loadingCtrl.create({
      content: message || 'Aguarde...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
}
