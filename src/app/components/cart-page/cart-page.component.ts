import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {

  carts: any[] = [];
  currentUser: any = [];

  constructor(private cartService: CartService, private userService: UserService) {
    this.cartService.cartObs.subscribe((cart) => {
      this.carts = cart;
      console.log("Koszyk", this.carts)
    })
    this.userService.currentUserObs.subscribe((user) => {
      this.currentUser = user;
    })
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
