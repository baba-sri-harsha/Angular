import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
  
export class ProductComponent implements OnInit {

  // products:Product[]=[]

  
  product!: Product; 
  products: Product[] = []
  productObs!: Observable<Product[]>
  constructor(private _productService: ProductService) { }

  
  ngOnInit(): void {
    // this._productService.getProduct().subscribe({
    //   next: (data) => {
    //     this.products = data
    //     console.log(data);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    //   complete:()=>console.log(`completed`)
    // });

      this.productObs=this._productService.getProduct()
  }

}
