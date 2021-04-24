import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS_DATA } from '../_data/products';
import { Product } from '../_models/products';

const PRODUCT_URL = 'https://ssupermarket.herokuapp.com/api/products/'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { 
  }

  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(PRODUCT_URL);
  }
  addProduct(product: Product): Observable<Product>{
    return this.httpClient.post<Product>(PRODUCT_URL, product, httpOptions);
  }
}
