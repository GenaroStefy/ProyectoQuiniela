import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'agregarquinielas',
    loadChildren: () => import('./agregarquinielas/agregarquinielas.module').then( m => m.AgregarquinielasPageModule)
  },
  {
    path: 'resultadosquiniela',
    loadChildren: () => import('./resultadosquiniela/resultadosquiniela.module').then( m => m.ResultadosquinielaPageModule)
  },
  {
    path: 'jornadas',
    loadChildren: () => import('./jornadas/jornadas.module').then( m => m.JornadasPageModule)
  },
  {
    path: 'equipos',
    loadChildren: () => import('./equipos/equipos.module').then( m => m.EquiposPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
