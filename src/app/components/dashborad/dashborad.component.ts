import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-dashborad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashborad.component.html',
  styleUrl: './dashborad.component.scss'
})
export class DashboradComponent {

  currentUser: any = [];
  orders: any = [];

  constructor(private userService: UserService, private cartService: CartService){
    this.userService.currentUserObs.subscribe((user)=>{
      this.currentUser = user;
      
  })
  
}

  myProfile: boolean = true;
  myOrders: boolean = false;


  showMyProfile(){
    this.myProfile = true;
    this.myOrders = false;
  }
  showMyOrders(){
    this.myProfile = false;
    this.myOrders = true;
  }
}
