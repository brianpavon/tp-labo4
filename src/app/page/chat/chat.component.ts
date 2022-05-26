import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  mensajeNuevo:string = '';
  arrayMensajes:any=[
    {
      id:"id",
      texto:"texto1"
    },
    {
      id:"id",
      texto:"texto2"
    },
    {
      id:"id",
      texto:"texto3"
    }
];
  constructor(private authService:AuthService) { 
    
  }

  ngOnInit(): void {
  }

  enviarMensaje(){
    if(this.mensajeNuevo == '') return;
    console.log(this.mensajeNuevo);
    this.mensajeNuevo = "";
  }
}
