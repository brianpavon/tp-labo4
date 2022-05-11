import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  isLogged:boolean;
  notLogged:boolean;
  userLogged:any;
 
  constructor(private router:Router,private auth:AngularFireAuth,public authUser:AuthService ) {
    this.isLogged = false;
    this.notLogged = false;    
    auth.authState.subscribe(user=>{
      if(user){
        this.userLogged = user.email;
        this.isLogged = true;
        this.notLogged = false;
      }else{
        this.isLogged = false;
        this.notLogged = true;
      }
    });
  }

  ngOnInit(): void {
  }
  redirectToQuienSoy(){
    this.router.navigate(['quien-soy']);
  }


}
