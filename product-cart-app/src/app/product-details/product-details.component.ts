import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  date: any = '2021-05-22T00:00:00'

  productsArray=[new Product("nord", "one plus",10000,"electronics",5,3,this.date),
            new Product("1s", "Mi",15000,"electronics",4,3),
            new Product("8i", "real me ",12000,"electronics",5,3),
            new Product("book", "classmate",50,"stationery",2,4,this.date)]



  
  cartArray:Product[]=[]
  
  addToCart=(product:Product)=>{
    this.cartArray.push(product)
  }


  
}
