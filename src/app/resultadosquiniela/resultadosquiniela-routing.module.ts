import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadosquinielaPage } from './resultadosquiniela.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadosquinielaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadosquinielaPageRoutingModule {}
