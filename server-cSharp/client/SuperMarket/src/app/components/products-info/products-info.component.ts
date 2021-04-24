import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/products';
import { ProductService } from 'src/app/_services/product.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-products-info',
  templateUrl: './products-info.component.html',
  styleUrls: ['./products-info.component.css']
})
export class ProductsInfoComponent implements OnInit {
  product: Product = {
    id: 1,
    name: 'Beer - Moosehead',
    description:
      'nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac',
    imageUrl: 'http://dummyimage.com/300x200.png/5fa2dd/ffffff',
    price: 46.25,
  }
  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {

  }
  addProduct(){
    this.productService.addProduct(this.product).subscribe(
      (product)=>{
        this.router.navigate(['/products'])
      },
      (error)=>{
        console.log(error)
      }
    );
  }

}
