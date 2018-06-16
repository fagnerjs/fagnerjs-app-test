import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';

import { SelectServicePage } from '../select-service/select-service';

@IonicPage()
@Component({
  selector: 'page-service-cancel',
  templateUrl: 'service-cancel.html',
})
export class ServiceCancelPage {
  loading: Loading
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {}

  performCancel() {
    this.showLoading('Aguarde, solicitando cancelamento...');

    // timeout para testar a transição entre loading e alert
    setTimeout(() => {
      this.loading.dismiss();
      const alert = this.alertCtrl.create({
        title: 'Serviço cancelado com sucesso!',
        subTitle: '',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              this.navCtrl.setRoot(SelectServicePage);
            }
          }
        ]
      });
      alert.present();

    },3000)
  }

  back():void {
    this.navCtrl.pop();
  }

  showLoading(message: string): void {
    this.loading = this.loadingCtrl.create({
      content: message || 'Aguarde...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

}
