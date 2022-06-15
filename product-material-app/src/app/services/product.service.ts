import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
  
  
export class ProductService {

  private _baseUrl="http://localhost:8803/product-api/products"

  
  constructor(private _httpClentModule:HttpClient) {}

  getProduct = (): Observable<Product[]> => {
    return this._httpClentModule.get<Product[]>(this._baseUrl);
  };

  getById = (id: number): Observable<Product> => {
    let url = this._baseUrl.concat("/productId/") + id;
    return this._httpClentModule.get<Product>(url)

  }
}
