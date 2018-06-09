import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceSchedulePage } from './service-schedule';

@NgModule({
  declarations: [
    ServiceSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceSchedulePage),
  ],
})
export class ServiceSchedulePageModule {}
