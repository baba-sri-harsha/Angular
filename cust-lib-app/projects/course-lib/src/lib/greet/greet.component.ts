import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css'],
})
export class GreetComponent implements OnInit {
  @Input() username!: string;
  constructor() {}

  ngOnInit(): void {}
}
