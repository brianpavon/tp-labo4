import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
  letras:string[]=[];
  palabras:string[] = ['PARRILLA','OTORRINOLARINGOLOGO','PASTILLA','RINOCERONTE','TRAUMATOLOGIA','FACIL','PEZ'];
  intentos:number = 0;  
  palabraRandom:string = '';
  palabraElegida:string[]=[];
  palabraCodificada:string='';  
  constructor() { 
    this.letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  }

  ngOnInit(): void {
    this.cargarJuego();
  }
  cargarJuego(){
    this.intentos = 6;
    const quePalabra = Math.floor(Math.random() * (this.palabras.length -1));
    console.log(quePalabra);
    
    this.palabraRandom = this.palabras[quePalabra];

    //console.log(`longitud: ${this.palabraRandom.length}`);
    for (let i = 0; i < this.palabraRandom.length; i++) {
      //console.log(`letra: ${this.palabraRandom[i]}`);
      this.palabraElegida.push('_')
    }
    this.palabraCodificada = this.palabraElegida.join(' ');
  }

  verifyLetter(letra:string){
    //console.log(`verifica: ${letra} palabraRandom ${this.palabraRandom}`);
    if(this.palabraRandom.includes(letra)){
      for (let i = 0; i < this.palabraRandom.length; i++) {
        //console.log(`letra ${this.palabraRandom[i]}`);
        //console.log(this.palabraCodificada[i]);
        if(this.palabraRandom[i] == letra){
          this.palabraElegida[i] = letra;
        }
      } 
      this.palabraCodificada = this.palabraElegida.join(' ');     
    }else{
      this.intentos--;
    }
    if(this.intentos == 0)  this.loser();
  }

  loser(){
    Swal.fire({
      title: 'Perdiste, la proxima quizas ganas',
      icon: 'error',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
    });
    this.cargarJuego();
  }



}
