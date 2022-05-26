import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

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
  isLogged:boolean = false;
  chatOn:boolean = false;
  constructor(private authService:AngularFireAuth, private user:UserService) { 
    authService.authState.subscribe(
      user=>{
        user ? this.isLogged = true : this.isLogged = false;
      }
    )
  }

  ngOnInit(): void {
  }

  enviarMensaje(){
    if(this.mensajeNuevo == '') return;
    console.log(this.mensajeNuevo);
    this.mensajeNuevo = "";
  }

  activateChat(){
    this.chatOn = true;
  }
  closeChat(){
    this.chatOn = false;
  }
}
