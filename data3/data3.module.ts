import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Data3PageRoutingModule } from './data3-routing.module';

import { Data3Page } from './data3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Data3PageRoutingModule
  ],
  declarations: [Data3Page]
})
export class Data3PageModule {}
