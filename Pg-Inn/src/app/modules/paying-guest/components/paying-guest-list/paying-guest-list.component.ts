import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PgService } from '../../services/pg.service';

@Component({
  selector: 'app-paying-guest-list',
  templateUrl: './paying-guest-list.component.html',
  styleUrls: ['./paying-guest-list.component.css'],
})
export class PayingGuestListComponent implements OnInit {
  city = '';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pgService: PgService
  ) {}

  ngOnInit(): void {
    // this._activatedRoute.paramMap.subscribe((map) => {
    //   let city = map.get('city');
    //   if (city) this.city = city;
    //   this._pgService.getPgByCities(this.city).subscribe({
    //     next: (data) => {
    //       this.ci = data;
    //     },
    //     complete: () => console.log(`completed successfully`),
    //   });
    // });
  }
}
