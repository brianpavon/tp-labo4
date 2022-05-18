import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent implements OnInit {
  numeroRandom:number;
  proximoNumero:number = 0;
  constructor() { 
    this.numeroRandom = Math.floor(Math.random() * 12)+1;
  }

  ngOnInit(): void {
  }

  esMayor(){
    this.numeroRandom = Math.floor(Math.random() * 12)+1;
    this.proximoNumero = Math.floor(Math.random() * 12)+1;
    //si son iguales tiro de nuevo el random
    if(this.numeroRandom == this.proximoNumero)  this.proximoNumero = Math.floor(Math.random() * 12)+1;
    this.numeroRandom < this.proximoNumero ? this.ganaste() : this.perdiste();
  }
  esMenor(){
    this.numeroRandom = Math.floor(Math.random() * 12)+1;
    this.proximoNumero = Math.floor(Math.random() * 12)+1;    
    //si son iguales tiro de nuevo el random
    if(this.numeroRandom == this.proximoNumero)  this.proximoNumero = Math.floor(Math.random() * 12)+1;    
    this.numeroRandom > this.proximoNumero ? this.ganaste() : this.perdiste();
  }

  ganaste(){
    this.numeroRandom = this.proximoNumero;    
    Swal.fire(`Ganaste!! El próximo era ${this.proximoNumero}`);
  }
  
  perdiste(){
    this.numeroRandom = this.proximoNumero;
    Swal.fire(`Perdiste!! El próximo era ${this.proximoNumero}`);
  }
}
