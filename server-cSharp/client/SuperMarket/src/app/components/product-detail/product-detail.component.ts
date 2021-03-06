import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../_models/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
