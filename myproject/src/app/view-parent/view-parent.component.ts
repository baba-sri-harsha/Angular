import { Component, OnInit,ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ViewParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
