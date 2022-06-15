import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products!: Product[];


  // inject router to navigatr to other componenet
  constructor(private _productService: ProductService,private _router:Router) {}

  
  ngOnInit(): void {
    this._productService.getProduct().subscribe({
      next: (data) => (this.products = data),
      error: (error) => console.log(error),
      complete: () => console.log(`Completed`),
    });
  }

  onSubmit = (product: Product) => {
    //use Router to navigate to productDetails Component 
    this._router.navigate(["/product-details",product.productId])

  }
  
}
