import { Component } from '@angular/core';
import { PRODUCTS_DATA } from './_data/products';
import { Product } from './_models/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    this.products = PRODUCTS_DATA;
  }
  products: Product[] = [];
}
