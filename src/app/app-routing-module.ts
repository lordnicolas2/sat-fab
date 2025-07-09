import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SatfabShips } from './satfab-ships/satfab-ships';
import { Descriptions } from './descriptions/descriptions';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ships',
    pathMatch: 'full'
  },
  {
    path: 'ships',
    component: SatfabShips
  },
  {
    path: 'descriptions',
    component: Descriptions
  },
  {
    path: 'satfab',
    component: SatfabShips
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',  //Activa el scroll automático al fragmento
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
