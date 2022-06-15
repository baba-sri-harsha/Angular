import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input('cOne') childOne = '';
  @Input() childTwo = '';
  @Input() parentOne = '';
  @Input() parentTwo = '';

  childClass = 'child';
  message = '';
  // the child emits click event
  // the data is captured
  @Output() messageEvent = new EventEmitter<string>();
  @Output() childEvent = new EventEmitter<string>();
  showMessage = () => {
    this.messageEvent.emit('From first child..');
  };

  printName(value: string) {
    this.childEvent.emit(`From second child ${value}`);
  }
}
