import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShipCart } from '../ship-cart';
import { Ship } from '../ship-list/Ship';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart implements OnInit {

  reloadPage() {
    window.location.reload();
  }

  
  shipCart: ShipCart = new ShipCart();

  getTotal(cartList: Ship[]): number {
    let total = 0;
    cartList.forEach((ship: Ship) => {
    total += ship.quantity * ship.cost;
    });
    return total;
  }
    
  cartList$: Observable<Ship[]>;
  constructor(private ship: ShipCart) {
    this.cartList$ = ship.cartList.asObservable();
  }

  ngOnInit(): void {
    
  }
}
