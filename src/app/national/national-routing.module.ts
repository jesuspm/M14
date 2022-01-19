import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NationalPage } from './national.page';

const routes: Routes = [
  {
    path: '',
    component: NationalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NationalPageRoutingModule {}
