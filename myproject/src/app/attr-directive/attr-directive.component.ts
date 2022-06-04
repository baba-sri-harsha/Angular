import { Component, OnInit } from '@angular/core';
import {Course} from '../models/course';

@Component({
  selector: 'app-attr-directive',
  templateUrl: './attr-directive.component.html',
  styleUrls: ['./attr-directive.component.css']
})
export class AttrDirectiveComponent implements OnInit {


  fruit="apple"
  
  courseArray:Course[]=[
    new Course("Html" , 8000,"Frontend" , "FrontEnd","SriPriya"),
    new Course("CSS" , 6000,"Backend" , "BackEnd","SriPriya "),
    new Course("typeScript" , 30000,"Other" , "online",),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
