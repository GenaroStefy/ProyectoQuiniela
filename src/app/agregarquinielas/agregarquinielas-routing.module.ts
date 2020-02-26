import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarquinielasPage } from './agregarquinielas.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarquinielasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarquinielasPageRoutingModule {}
