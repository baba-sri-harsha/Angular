import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pg } from '../models/pg';


@Injectable({
  providedIn: 'root'

})
  
  
export class PgService {

  private _url="../assets/pg.json"

  constructor(private _httpClentModule:HttpClient) {}

  getPg = (): Observable<Pg[]> => {
    return this._httpClentModule.get<Pg[]>(this._url);
  };
}
