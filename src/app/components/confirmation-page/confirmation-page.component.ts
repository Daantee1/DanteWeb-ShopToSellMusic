import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';
import { Order } from '../../types/order';

@Component({
  selector: 'app-confirmation-page',
  standalone: true,
  imports: [],
  templateUrl: './confirmation-page.component.html',
  styleUrl: './confirmation-page.component.scss'
})
export class ConfirmationPageComponent implements OnInit{

  transactionId: any;
  carts: any[] = [];
  currentUserId: any ;
  order: Order[] = []

 
  
  constructor(cartService: CartService, userService: UserService){
    this.transactionId = cartService.transactionId;
    cartService.cartObs.subscribe((cart: any) => {
      this.carts = cart;
     
    })
    userService.currentUserObs.subscribe((user: any) => {
      this.currentUserId = user.id;
      
    })
    
    this.order = [{
      userId: this.currentUserId,
      orderId: this.transactionId,
      orderDetails: JSON.stringify(this.carts),
      orderDate: this.formatDate(new Date())
     }]
    cartService.addOrderToSql(this.order)
    console.log('Zamówienie do dodania do bazy',this.order)
  }
  ngOnInit(): void {
   
    
    
  }
  formatDate(date: Date): string {
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  }
  


}
