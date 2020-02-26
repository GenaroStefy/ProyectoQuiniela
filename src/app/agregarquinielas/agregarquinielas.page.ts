import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agregarquinielas',
  templateUrl: './agregarquinielas.page.html',
  styleUrls: ['./agregarquinielas.page.scss'],
})
export class AgregarquinielasPage implements OnInit {

  constructor(public navController : NavController, public modalController: ModalController) {}

  ngOnInit() {
  }

}
