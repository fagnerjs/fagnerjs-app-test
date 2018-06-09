import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceSummaryPage } from './service-summary';

@NgModule({
  declarations: [
    ServiceSummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceSummaryPage),
  ],
})
export class ServiceSummaryPageModule {}
