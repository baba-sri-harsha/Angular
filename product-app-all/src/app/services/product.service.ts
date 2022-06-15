import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../components/models/product';
import { TypeView } from '../components/models/type-view';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //product-app-rest-api

  private _baseurl = 'http://localhost:8804/product-api/products/';

  constructor(private _httpClient: HttpClient) {}

  getProducts = (): Observable<Product[]> => {
    return this._httpClient.get<Product[]>(this._baseurl);
  };

  getById = (id: number): Observable<Product> => {
    let url = `${this._baseurl}productId/${id}`;
    return this._httpClient.get<Product>(url);
  };

  getDistinctCategory = (): Observable<string[]> => {
    let url = `${this._baseurl}all-categories/`;
    return this._httpClient.get<string[]>(url);
  };

  getDistinctType = (category: string): Observable<TypeView[]> => {
    let url = `${this._baseurl}dis-cat/${category}`;
    return this._httpClient.get<TypeView[]>(url);
  };

  getByCategory = (category: string): Observable<Product[]> => {
    let url = `${this._baseurl}category/${category}`;
    return this._httpClient.get<Product[]>(url);
  };

  getByType = (type: string): Observable<Product[]> => {
    let url = `${this._baseurl}type/${type}`;
    return this._httpClient.get<Product[]>(url);
  };

  addProduct = (product: Product): Observable<Product> => {
    let url = `${this._baseurl}`;
    return this._httpClient.post<Product>(url, product);
  };

  updateProduct = (product: Product): Observable<Product> => {
    let url = `${this._baseurl}`;
    return this._httpClient.put<Product>(url, product);
  };
}
