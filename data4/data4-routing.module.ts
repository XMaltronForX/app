import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Data4Page } from './data4.page';

const routes: Routes = [
  {
    path: '',
    component: Data4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Data4PageRoutingModule {}
