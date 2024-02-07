import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterPageComponent } from '../register-page/register-page.component';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterModule, RegisterPageComponent, FormsModule, HomeComponent, HttpClientModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  constructor(private userService : UserService, private router: Router, Http: HttpClient){}

  userDetails = {
    email: '',
    password: ''
  }

  loginCheckValid: boolean = false;

  login(){
    const loginCheck = this.userService.login(this.userDetails.email, this.userDetails.password);
    if(loginCheck){
      console.log("Zalogowano");
      this.router.navigate(['/Home'])
  }
  else{
    console.log("Nie zalogowano");
    this.loginCheckValid = true;
  }
  }
}
