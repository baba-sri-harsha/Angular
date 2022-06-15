import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  brand!: string;

  categories!: string[];

  productCategory!: Product[];

  prodCat!: Product[];

  show = () => {
    console.log(this.brand);
  };

  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._productService.getDistinctCategory().subscribe({
      next: (data) => (this.categories = data),
    });
  }

  viewByCategory = (category: string) => {
    this._productService.getByCategory(category).subscribe({
      next: (data) => (this.productCategory = data),
    });
    this._router.navigate(['/products', category]);
  };
}
