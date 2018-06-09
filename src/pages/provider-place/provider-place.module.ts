import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProviderPlacePage } from './provider-place';

@NgModule({
  declarations: [
    ProviderPlacePage,
  ],
  imports: [
    IonicPageModule.forChild(ProviderPlacePage),
  ],
})
export class ProviderPlacePageModule {}
