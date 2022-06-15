import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.css'],
})
export class BookDescriptionComponent implements OnInit {
  constructor() {}

  @Input() describe = '';

  ngOnInit(): void {}
}
