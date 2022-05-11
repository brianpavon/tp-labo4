import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';

import { AhorcadoComponent } from './pages/ahorcado/ahorcado.component';
import { JuegosComponent } from './pages/juegos.component';
import { MayorMenorComponent } from './pages/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './pages/preguntados/preguntados.component';
import { MenuJuegosComponent } from './pages/menu-juegos/menu-juegos.component';


@NgModule({
  declarations: [

    AhorcadoComponent,
     JuegosComponent,
     MayorMenorComponent,
     PreguntadosComponent,
     MenuJuegosComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule
  ]
})
export class JuegosModule { }
