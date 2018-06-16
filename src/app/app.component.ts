import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, ModalController, MenuController, AlertController, LoadingController, Loading, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import * as moment from 'moment';

import { SigninPage } from '../pages/signin/signin';
import { SelectServicePage } from '../pages/select-service/select-service';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { Storage } from '@ionic/storage';

import configs from '../app/config';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('mycontent') nav: NavController
  rootPage:any
  loading: Loading;
  current: string;
  initiated: boolean = false;

  menuItems=[];

  constructor(
    platform: Platform,
    private alertCtrl: AlertController,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    modalCtrl: ModalController,
    private storage: Storage,
    private auth: AuthServiceProvider,
    private loadingCtrl: LoadingController,
    public events: Events,
    public menuCtrl: MenuController,
    private geolocation: Geolocation
  ) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      moment.locale('pt-BR');

      const perform = () => {
        this.initiated = true;

        // inexistent session
        if(!configs.settings.auth.session) {
          this.rootPage = SigninPage;
          return;
        }

        this.showLoading();

        // check session
        this.auth.me(configs.settings.auth.session).then(() => {
          this.loading.dismiss().then(() => this.rootPage = SelectServicePage);
        }).catch(e => {
          if(e.status == 401) {
            this.loading.dismiss().then(() => this.nav.setRoot(SigninPage))
          }else {
            this.loading.dismiss().then(() => {
              const alert = this.alertCtrl.create({
                title:  'HTTP failed',
                subTitle: 'Unable to connect to default server',
                buttons: [
                  {
                    text: 'Ok',
                    handler: () => {
                      this.rootPage = SigninPage;
                    }
                  }
                ]
              });
              alert.present();
            });
          }
        });
      }

      this.geolocation.watchPosition().subscribe((data) => {
        configs.location.latitude = data.coords.latitude;
        configs.location.longitude = data.coords.longitude;

        if(this.initiated) {
          return;
        }

        this.storage.get('settings').then(settings => {
          if(!settings) {
            this.storage.set('settings', configs.settings).then(() => perform());
            return;
          }
          configs.settings = settings;
          perform();
        });
      }, err => {
        const alert = this.alertCtrl.create({
          title:  'Falha ao obter sua localização',
          subTitle: 'Não foi possível obter sua localização. Certifique-se de que seu GPS está ativado',
          buttons: [
            {
              text: 'Ok',
              handler: () => {}
            }
          ]
        });
        alert.present();
      });
      // const splash = modalCtrl.create(SplashPage);
      // splash.present();
    });
  }

  showLoading(message:string = ''): void {
    this.loading = this.loadingCtrl.create({
      content: message || 'Aguarde...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
}
