import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Class/User/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newPerson:User;
  constructor() { 
    this.newPerson = new User();
  }

  ngOnInit(): void {
  }

}
