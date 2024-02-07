import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from 'express';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Music } from '../../types/music';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isLogged: boolean = false;
  carts: any[] = [];
constructor(private auth: AuthService, private cartService: CartService){
  this.auth.isLogged.subscribe((logged)=>{
    this.isLogged = logged;
  })
  this.cartService.cartObs.subscribe((cart)=>{
    this.carts = cart;
  })
}

logout(){
  this.auth.logout()
}

calculateTotal(){
  let  total = 0;
  this.carts.forEach((item)=>{
    if(item.license && item.license.price){
      total += item.license.price
    }
  })
  return total
}




}
