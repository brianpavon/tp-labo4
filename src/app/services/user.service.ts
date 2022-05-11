import { Injectable, Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  @Output() getUsers: EventEmitter<any> = new EventEmitter();
  email?:string;
  constructor() { 
    
  }
}
