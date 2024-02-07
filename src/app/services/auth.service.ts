import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../types/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = new BehaviorSubject<boolean>(false)
 



  login(){
      this.isLogged.next(true)
      console.log("Auth service: zalogowano");
  }

  logout(){
    this.isLogged.next(false)
  }
}
