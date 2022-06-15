import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/components/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  constructor(private _productService: ProductService) {}

  categories!: string[];
  types!: string[];

  ngOnInit(): void {
    this._productService.getDistinctCategory().subscribe({
      next: (data) => (this.categories = data),
    });
  }

  updateProduct(addForm: NgForm): void {
    let product: Product = addForm.value;
    this._productService.updateProduct(product).subscribe({
      next: (data) => console.log(data),
    });
  }
}
