import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'clima',
        loadChildren: () => import('./clima/clima.module').then( m => m.ClimaPageModule)
      },
      {
        path: 'asistencia',
        loadChildren: () => import('./asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
      },
      {
        path: 'qr',
        loadChildren: () => import('./qr/qr.module').then( m => m.QrPageModule)
      },
    ]
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
