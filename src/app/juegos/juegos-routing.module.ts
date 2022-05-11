import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './pages/ahorcado/ahorcado.component';
import { MayorMenorComponent } from './pages/mayor-menor/mayor-menor.component';
import { MenuJuegosComponent } from './pages/menu-juegos/menu-juegos.component';
import { PreguntadosComponent } from './pages/preguntados/preguntados.component';

const routes: Routes = [
  {path:'',component:MenuJuegosComponent,
  children:[
    {path:'ahorcado',component:AhorcadoComponent},
    {path:'mayor-menor',component:MayorMenorComponent},
    {path:'preguntados',component:PreguntadosComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
