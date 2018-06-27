import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CeramicPage } from './ceramic';

@NgModule({
  declarations: [
    CeramicPage,
  ],
  imports: [
    IonicPageModule.forChild(CeramicPage),
  ],
})
export class CeramicPageModule {}
