import { Component, OnInit } from '@angular/core';
import { PRODUCTS_DATA } from '../_data/products';
import { Product } from '../_models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(){
    this.products = PRODUCTS_DATA;
  }
  products: Product[] = [];
  ngOnInit(): void {
  }

}
