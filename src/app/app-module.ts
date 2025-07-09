import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ShipList } from './ship-list/ship-list';

import { FormsModule } from '@angular/forms';
import { Cart } from './cart/cart';
import { SatfabShips } from './satfab-ships/satfab-ships';
import { Descriptions } from './descriptions/descriptions';
//import { InputInteger } from './input-integer/input-integer';

@NgModule({
  declarations: [
    App,
    ShipList,
    Cart,
    SatfabShips,
    Descriptions,
  //  InputInteger
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
  
})
export class AppModule { }
