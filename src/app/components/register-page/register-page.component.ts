import { Component } from '@angular/core';
import { User } from '../../types/user';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterModule, LoginPageComponent, FormsModule, HttpClientModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

  user: User = {
    id: null,
    email: '',
    login: '',
    password: '',
    passwordConfirm: '',
  }
  passwordMatch: boolean = false
  

  constructor(private router: Router, private userService: UserService) {}

  

  register(){
    
    const emailCheck = this.userService.emailCheck(this.user.email);
    const loginCheck = this.userService.loginCheck(this.user.login);
    if(emailCheck){
      alert("Użytkownik o takim e-mailu już jest w bazie");
      console.log("Użytkownik o takim e-mailu już jest w bazie");
    }else if(loginCheck){
      alert("Użytkownik o takim loginie już jest w bazie");
      console.log("Użytkownik o takim loginie już jest w bazie");
    }else{
      this.userService.addUser(this.user);
      this.router.navigate(['/Login-Page']);
    }
    
    
  }

  checkPassword() {
    this.passwordMatch = this.user.password == this.user.passwordConfirm;
  }



}
