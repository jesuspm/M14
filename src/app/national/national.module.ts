import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NationalPageRoutingModule } from './national-routing.module';

import { NationalPage } from './national.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NationalPageRoutingModule
  ],
  declarations: [NationalPage]
})
export class NationalPageModule {}
