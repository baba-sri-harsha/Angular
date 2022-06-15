import { Component, OnInit } from '@angular/core';
import { PgService } from '../services/pg.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  opened = false;
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
