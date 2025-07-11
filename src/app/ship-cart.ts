import { Injectable } from '@angular/core';
import { Ship } from './ship-list/Ship';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShipCart {

  private _cartList: Ship[] = [];

  cartList: BehaviorSubject<Ship[]> = new BehaviorSubject<Ship[]>([]);

  constructor() { }

  addToCart(ship: Ship) {
    let item: Ship | undefined = this._cartList.find((v1) => v1.name == ship.name);
    if(!item){
      this._cartList.push({...ship});
    }
      else {
        item.quantity = Number(item.quantity) + Number(ship.quantity);
      }
    this.cartList.next(this._cartList);

    //  Restar stock y limpiar cantidad seleccionada
    ship.stock -= ship.quantity;
    ship.quantity = 0;
  } 
    
}