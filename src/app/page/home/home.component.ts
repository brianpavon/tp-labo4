import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogged: boolean;
  notLogged: boolean;
  gamesOn: boolean;
  chatOn:boolean = false;

  constructor(private user:UserService,private auth:AngularFireAuth) { 
    this.isLogged = false;
    this.notLogged = false;
    this.gamesOn = false;
    auth.authState.subscribe(user=>{
      user ? this.isLogged = true : this.isLogged = false;
    })
  }

  ngOnInit(): void {
  }

  activateGames(status:string){
    status == 'on' ? this.gamesOn = true : this.gamesOn = false;    
  }

  activateChat(){
    this.chatOn = true;
  }
  closeChat(){
    this.chatOn = false;
  }
}
