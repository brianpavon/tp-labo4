import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-juegos',
  templateUrl: './menu-juegos.component.html',
  styleUrls: ['./menu-juegos.component.css']
})
export class MenuJuegosComponent implements OnInit {
  gamesOn:boolean;
  constructor() { 
    this.gamesOn = false;
  }

  ngOnInit(): void {
  }
  activateGames(status:boolean){
    status  ? this.gamesOn = true : this.gamesOn = false;    
  }
}
