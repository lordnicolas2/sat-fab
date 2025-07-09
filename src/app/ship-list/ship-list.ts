import { Component, OnInit } from '@angular/core';
import { Ship } from './Ship';
import { ShipCart } from '../ship-cart';

@Component({
  selector: 'app-ship-list',
  standalone: false,
  templateUrl: './ship-list.html',
  styleUrl: './ship-list.scss'
})

export class ShipList implements OnInit {

  ships: Ship[] = [
    {
      name: 'Alpha',
      cost: 40,
      image: 'assets/img/alpha.jpg',
      quantity: 0,
      stock: 500,
    },
    {
      name: 'Beta',
      cost: 50,
      image: 'assets/img/beta.gif',
      quantity: 0,
      stock: 400,
    },
    {
      name: 'Cyclone',
      cost: 10,
      image: 'assets/img/cyclone.gif',
      quantity: 0,
      stock: 1000,
    },
    {
      name: 'Horizon-T',
      cost: 250,
      image: 'assets/img/horizont.gif',
      quantity: 0,
      stock: 10,
    },
    {
      name: 'Garfish',
      cost: 550,
      image: 'assets/img/garfish.gif',
      quantity: 0,
      stock: 3,
    },
    {
      name: 'Ikazuchi',
      cost: 1000,
      image: 'assets/img/ikazuchi.gif',
      quantity: 0,
      stock: 1,
    },
  ];
  shipCart: any;
  
  
  constructor(private cart: ShipCart) { 
  }

  ngOnInit(): void {
  }

  addToCart (ship: Ship): void {
    this.cart.addToCart(ship); 
    ship.stock -= ship.quantity;
    ship.quantity = 0;
  }

  downQuantity (ship: Ship): void {
    if(ship.quantity > 0)
      ship.quantity--;
  }

  upQuantity (ship: Ship): void {
    if(ship.quantity < ship.stock)
      ship.quantity++;
  }


}
