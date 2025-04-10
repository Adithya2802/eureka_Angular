import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cartItemSubject = new BehaviorSubject([]);
cartItem$ = this.cartItemSubject.asObservable();
private totalPriceSubject = new BehaviorSubject(0);
totalPrice$=this.totalPriceSubject.asObservable();

addItem(newItem:any){
const cartItems : any = this.cartItemSubject.value;
cartItems.push(newItem);
this.cartItemSubject.next(cartItems);
// this.calculateTotalPrice();
// }


//   constructor() { }

}

}
