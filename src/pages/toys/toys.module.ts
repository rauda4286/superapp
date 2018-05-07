import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToysPage } from './toys';

@NgModule({
  declarations: [
    ToysPage,
  ],
  imports: [
    IonicPageModule.forChild(ToysPage),
  ],
})
export class ToysPageModule {}
