import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  emp={
    name:"bab",
    city:"eluru",
    salary:100000,
    bonus:500.547892,
    dateOfBirth:'2022-06-03T11:27:17',

  }
}
