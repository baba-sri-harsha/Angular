import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-str-directive',
  templateUrl: './str-directive.component.html',
  styleUrls: ['./str-directive.component.css']
})
export class StrDirectiveComponent implements OnInit {

  username='Rahul';
  
  courseArray:Course[]=[
    new Course("Html" , 8000,"Frontend" , "Front-end","SriPriya"),
    new Course("CSS" , 6000,"Backend" , "offline","SriPriya "),
    new Course("typeScript" , 30000,"Frontend" , "online",),
  ]

  
  constructor() { }

  ngOnInit(): void {
  }

  

}
