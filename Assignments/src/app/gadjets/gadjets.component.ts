import { Component, OnInit } from '@angular/core';
import { Laptop } from '../models/laptop';
import { Mobile } from '../models/mobile';

@Component({
  selector: 'app-gadjets',
  templateUrl: './gadjets.component.html',
  styleUrls: ['./gadjets.component.css']
})
export class GadjetsComponent implements OnInit {

  
  fromuser:string=''
  display(value:string){
    
    (this.isNumber(value)?this.fromuser=value:parseInt(this.fromuser=value))

  }

  isNumber(value:any){
    return (typeof value=='number'?true:false)
     
  }

  numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  mobiles=[
    new Mobile("nord","one plus",250000),
    new Mobile("1s","mi",14000),
    new Mobile("iQ 007","iqooz",27000)
  ]

  laptops=[
    new Laptop("latitude 3250","dell",47000),
    new Laptop("yoga","lenovo",50000),
    new Laptop("tuf","asus",80000),
    new Laptop("vivo book","asus",50000)
  ]

  constructor() { }

  ngOnInit(): void {
  }


  
}
