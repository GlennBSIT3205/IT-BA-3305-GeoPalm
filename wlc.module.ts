import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WlcPageRoutingModule } from './wlc-routing.module';

import { WlcPage } from './wlc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WlcPageRoutingModule
  ],
  declarations: [WlcPage]
})
export class WlcPageModule {}
