import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private _url="http://localhost:8803/product-api/products"

  //http client 
  constructor(private _httpClentModule:HttpClient) {}

  getProduct = (): Observable<Product[]> => {
    return this._httpClentModule.get<Product[]>(this._url);
  };
  
}
