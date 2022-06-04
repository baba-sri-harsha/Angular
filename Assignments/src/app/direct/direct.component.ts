import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent implements OnInit {

  fruits=["apple","strawberry","orange","blueberry","rasberry","grapes","kiwi"]
  constructor() { }

  ngOnInit(): void {
  }
username=''
checkClass="check"
errorClass="error"
}
