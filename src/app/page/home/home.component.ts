import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  gamesOn: boolean = false;
  

  constructor(private user:UserService,private auth:AngularFireAuth) { 
   
  }

  ngOnInit(): void {
  }

  activateGames(status:string){
    status == 'on' ? this.gamesOn = true : this.gamesOn = false;    
  }


}
