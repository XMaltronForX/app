import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'data1',
    loadChildren: () => import('./data1/data1.module').then( m => m.Data1PageModule)
  },
  {
    path: 'data2',
    loadChildren: () => import('./data2/data2.module').then( m => m.Data2PageModule)
  },
  {
    path: 'data3',
    loadChildren: () => import('./data3/data3.module').then( m => m.Data3PageModule)
  },
  {
    path: 'data4',
    loadChildren: () => import('./data4/data4.module').then( m => m.Data4PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
