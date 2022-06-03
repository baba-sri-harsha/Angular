import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Laptop } from '../models/laptop';
import { Mobile } from '../models/mobile';

@Component({
  selector: 'app-gadjets',
  templateUrl: './gadjets.component.html',
  styleUrls: ['./gadjets.component.css']
})
export class GadjetsComponent implements OnInit {

  
  fromuser:any
  display(value:string){
    
    this.fromuser=value

  }

  multiples:number[]=[]
  displayNumbers(value:any){
    console.log();
    this.multiples=this.numbers.map((number)=>{
      let num =number*parseInt(value);
      console.log(num);
      return num;
    }
  )}

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
