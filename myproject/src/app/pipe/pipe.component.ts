import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  

  emp={
    name:"bab",
    city:"eluru",
    salary:100000,
    bonus:500.547892,
    dateOfBirth:'2022-06-03T11:27:17',

  }

  propNames=["courseName","cost","type","medium","trainer"]
  
  choice = ''
  propertyName=''

  courseArray:Course[]=[
    new Course("Html" , 8000,"Frontend" , "english","SriPriya"),
    new Course("CSS" , 6000,"Backend" , "telugu","SriPriya "),
    new Course("typeScript" , 30000,"Other" , "online",)
  ]

  

  constructor() { }

  ngOnInit(): void {
    
  }
}
