import { Injectable } from '@angular/core';
import { Music } from '../types/music';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any = [];
  cartObs = new BehaviorSubject<Music[]>(this.cart);
  transactionId: any;
  readonly APIUrl="http://localhost:5279/api/DanteWeb/"
  cartDataSql: any = [];
  cartDataSqlObs = new BehaviorSubject<Music[]>(this.cartDataSql);
  constructor(private http: HttpClient, private userService: UserService) {
  
   }

  

  addToCart(musicItem: any){
    this.cart.push(musicItem);
    this.cartObs.next(this.cart);
    
   
  }
  

  getOrders(): Observable<any>{
    return this.transactionId
  }

  addOrderToSql(order: any){
    const formData = new FormData();
    formData.append('userId', order.userId);
    formData.append('orderId', order.orderId);
    formData.append('orderDetails', order.orderDetails);
    formData.append('userDate', order.orderDate);
    this.http.post(this.APIUrl+ 'AddOrder', formData).subscribe(response=>{
      console.log('Zamówienie dodane do bazy SQL', response)
    },error =>{
      console.log('Błąd podczas dodawania zamówienia do bazy SQL', error)
    }
    )
  }


}
