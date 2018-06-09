import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceProviderRatePage } from './service-provider-rate';

@NgModule({
  declarations: [
    ServiceProviderRatePage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceProviderRatePage),
  ],
})
export class ServiceProviderRatePageModule {}
