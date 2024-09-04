import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Data1PageRoutingModule } from './data1-routing.module';
import { QrCodeModule } from 'ng-qrcode';
import { Data1Page } from './data1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Data1PageRoutingModule,
    QrCodeModule

    
  ],
  declarations: [Data1Page]
})
export class Data1PageModule {}
