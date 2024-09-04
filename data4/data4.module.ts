import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Data4PageRoutingModule } from './data4-routing.module';

import { Data4Page } from './data4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Data4PageRoutingModule
  ],
  declarations: [Data4Page]
})
export class Data4PageModule {}
