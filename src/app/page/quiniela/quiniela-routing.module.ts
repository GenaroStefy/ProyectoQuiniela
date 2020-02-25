import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuinielaPage } from './quiniela.page';

const routes: Routes = [
  {
    path: '',
    component: QuinielaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuinielaPageRoutingModule {}
