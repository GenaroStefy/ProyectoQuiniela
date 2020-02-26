import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadosquinielaPageRoutingModule } from './resultadosquiniela-routing.module';

import { ResultadosquinielaPage } from './resultadosquiniela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadosquinielaPageRoutingModule
  ],
  declarations: [ResultadosquinielaPage]
})
export class ResultadosquinielaPageModule {}
