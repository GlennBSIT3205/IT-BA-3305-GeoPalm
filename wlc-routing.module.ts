import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WlcPage } from './wlc.page';

const routes: Routes = [
  {
    path: '',
    component: WlcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WlcPageRoutingModule {}
