import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Data3Page } from './data3.page';

const routes: Routes = [
  {
    path: '',
    component: Data3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Data3PageRoutingModule {}
