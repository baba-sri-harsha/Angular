import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cities } from '../../models/cities';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _router: Router) {}

  cities = Object.keys(Cities).filter((value) => isNaN(Number(value)));

  ngOnInit(): void {}

  getPgByCity = (city: string) => {
    this._router.navigate(['pg-city/' + city]);
  };
}
