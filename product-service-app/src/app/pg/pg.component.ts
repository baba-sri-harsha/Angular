import { Component, OnInit } from '@angular/core';
import { Pg } from '../models/pg';
import { PgService } from '../services/pg.service';

@Component({
  selector: 'app-pg',
  templateUrl: './pg.component.html',
  styleUrls: ['./pg.component.css']
})
export class PgComponent implements OnInit {

  
  pgList:Pg[]=[]

  constructor(private _pgService:PgService) { }
  ngOnInit(): void {
    this._pgService.getPg().subscribe({
      next: (data) => {
        this.pgList = data
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete:()=>console.log(`completed`)
    });
  }

}
