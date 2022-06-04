import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `
  <h2 [class]="'article'">{{message}}</h2>
  <h3 [class]="descClass">Welcome {{username}}</h3>
  `,
  styles: [`
    .article{
      background-color:green;
      text-transform:uppercase;
    }
    .desc{
      color:orange
    }
  `]
})
export class InlineComponent implements OnInit {

  message ='Using Inline Template';
  username='priya'
  descClass='desc'

  constructor() { }

  ngOnInit(): void {
  }

}
