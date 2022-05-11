import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjercicioUnoComponent } from './page/ejercicioUno/ejercicio-uno.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { ErrorComponent } from './page/error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { MenuPrincipalComponent } from './page/menu-principal/menu-principal.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { JuegosComponent } from './page/juegos/juegos.component';

@NgModule({
  declarations: [
    AppComponent,
    EjercicioUnoComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    QuienSoyComponent,
    MenuPrincipalComponent,
    JuegosComponent
  ],
  imports: [
    BrowserModule,        
    FormsModule, 
    AppRoutingModule, 
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
