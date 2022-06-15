import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId: number = 0;
  product!: Product;
  // use ActivatedRoute to get the current activated route
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((map) => {
      let id = map.get('id');
      this.productId = Number(id);
      this._productService.getById(this.productId).subscribe({
        next: (data) => (this.product = data),
      });
    });
  }
}
