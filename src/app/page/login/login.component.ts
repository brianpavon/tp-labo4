import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Class/User/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newPerson:User;
  constructor(private routes:Router) { 
    this.newPerson = new User();
  }

  ngOnInit(): void {
  }
  redirectToHome(){
    
    if(this.newPerson.validate()){
      this.routes.navigate(['home']);
    }
  }

}
