import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceSettingsPage } from './service-settings';

@NgModule({
  declarations: [
    ServiceSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceSettingsPage),
  ],
})
export class ServiceSettingsPageModule {}
