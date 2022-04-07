import { Component, OnInit } from '@angular/core';
import { Number } from 'src/app/Class/Number/number';

@Component({
  selector: 'app-ejercicio-uno',
  templateUrl: './ejercicio-uno.component.html',
  styleUrls: ['./ejercicio-uno.component.css']
})
export class EjercicioUnoComponent implements OnInit {
  miNumero:Number;
  constructor() { 
    this.miNumero = new Number;
  }

  ngOnInit(): void {
  }

}
