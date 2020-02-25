import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuinielaPageRoutingModule } from './quiniela-routing.module';

import { QuinielaPage } from './quiniela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuinielaPageRoutingModule
  ],
  declarations: [QuinielaPage]
})
export class QuinielaPageModule {}
