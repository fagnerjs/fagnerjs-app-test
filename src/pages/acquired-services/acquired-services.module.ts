import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcquiredServicesPage } from './acquired-services';

@NgModule({
  declarations: [
    AcquiredServicesPage,
  ],
  imports: [
    IonicPageModule.forChild(AcquiredServicesPage),
  ],
})
export class AcquiredServicesPageModule {}
