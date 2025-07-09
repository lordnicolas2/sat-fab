import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ship } from './ship-list/Ship';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  title: string = "Satélite fábrica";
}
