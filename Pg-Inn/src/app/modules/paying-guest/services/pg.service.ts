import { PayingGuest } from './../models/paying-guest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PgService {
  private _baseUrl = 'http://localhost:8080/paying-guest-api/paying-guests/';

  constructor(private _httpClient: HttpClient) {}

  getPgByCities = (city: string): Observable<PayingGuest[]> => {
    return this._httpClient.get<PayingGuest[]>(
      this._baseUrl.concat('city/', city)
    );
  };
}
