import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.scss'
})
export class PaymentPageComponent implements OnInit{
  
  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;
  carts: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private router: Router){
    this.cartService.cartObs.subscribe((cart) => {
      this.carts = cart;
      
    })
  }

  ngOnInit(): void {
    this.total = this.calculateTotal();
    
    window.paypal.Buttons({
      style:{
        layout: 'horizontal',
        color: 'blue',
        shape: 'rect',
        label: 'paypal',
      },
      createOrder: (data: any, actions: any)=>{
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: this.total.toString(),
                currency_code: 'PLN'
              }
            }
          ]
        })
      },
      onApprove: (data: any, actions: any)=>{
        return actions.order.capture().then((details: any)=>{
          if(details.status === 'COMPLETED'){
            alert('Transakcja zakończona pomyślnie')
            this.cartService.transactionId = details.id
            this.router.navigate(['/Confirmation-Page'])
          }
        })
      },
      onError: (err: any)=>{
        console.log(err)
      }
    }).render(this.paymentRef.nativeElement);
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
