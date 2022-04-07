import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjercicioUnoComponent } from './page/ejercicioUno/ejercicio-uno.component';
import { ErrorComponent } from './page/error/error.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';



const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'casa', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'ingreso', component:LoginComponent},
  {path: 'quien-soy', component:QuienSoyComponent},
  {path: 'ejercicio-uno', component:EjercicioUnoComponent},
  //esto si quiero una pagina dentro de otra, en el padre hay que poner el router outlet
  //{path:'juegos',component:componentJuego children: [
    //{path:'tateti',component:tateticomponent},
    //{path: '**', component:ErrorComponent}
  //]},
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: '**', component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
