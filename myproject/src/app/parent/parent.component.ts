import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  firstChild=''
  secondChild=''
  constructor() { }

  ngOnInit(): void {
  }


parentClass='parent'
pmessage1="From parent one "
pmessage2="From parent two"

}
