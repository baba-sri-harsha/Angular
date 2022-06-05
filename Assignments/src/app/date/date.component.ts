import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  choice ='2022-07-05T14:10:10'
  choice1 ='09-05-2020'

  name='baba'
}
