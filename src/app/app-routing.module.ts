import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'menu',
    loadChildren: () => import('./page/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'equipos',
    loadChildren: () => import('./page/equipos/equipos.module').then( m => m.EquiposPageModule)
  },
  {
    path: 'jornadas',
    loadChildren: () => import('./page/jornadas/jornadas.module').then( m => m.JornadasPageModule)
  },
  {
    path: 'quiniela',
    loadChildren: () => import('./page/quiniela/quiniela.module').then( m => m.QuinielaPageModule)
  },
  {
    path: 'resultados',
    loadChildren: () => import('./page/resultados/resultados.module').then( m => m.ResultadosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }