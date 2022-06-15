import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root',
})
export class BookServiceService {
  _url = 'http://localhost:8804/books/';

  constructor(private _httpClient: HttpClient) {}

  getBooks = (): Observable<Book[]> => {
    return this._httpClient.get<Book[]>(this._url);
  };

  getCategories = (): Observable<string[]> => {
    return this._httpClient.get<string[]>(this._url + 'categories');
  };

  getBooksByCategory = (category: string): Observable<Book[]> => {
    return this._httpClient.get<Book[]>(
      this._url + 'category/' + `${category}`
    );
  };

  getBookById = (id: number): Observable<Book> => {
    return this._httpClient.get<Book>(this._url + 'id/' + `${id}`);
  };
}
