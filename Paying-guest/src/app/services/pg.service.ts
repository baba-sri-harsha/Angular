import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pg} from '../model/pg'

@Injectable({
  providedIn: 'root'
})
  
export class PgService {

  _baseUrl="http://localhost:8801/payingguest-api/payingguests/"

  constructor(private _httpClientModule: HttpClient) { }
  
  getPgCities = (): Observable<string[]> => {
    return this._httpClientModule.get<string[]>(`${this._baseUrl}/cities`);
  };
  
}
