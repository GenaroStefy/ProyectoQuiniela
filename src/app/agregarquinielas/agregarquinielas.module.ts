import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarquinielasPageRoutingModule } from './agregarquinielas-routing.module';

import { AgregarquinielasPage } from './agregarquinielas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarquinielasPageRoutingModule
  ],
  declarations: [AgregarquinielasPage]
})
export class AgregarquinielasPageModule {}
