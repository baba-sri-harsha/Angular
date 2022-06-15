import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PgService } from '../services/pg.service';

@Component({
  selector: 'app-pg',
  templateUrl: './pg.component.html',
  styleUrls: ['./pg.component.css']
})
export class PgComponent implements OnInit {

  cities!: string[];

  constructor(private _pgService:PgService) { }

  ngOnInit(): void {
    this._pgService.getPgCities().subscribe({
      next:(data)=>this.cities=data,
    })
  }

  show = () => {
    console.log(this.cities);
  }

}
