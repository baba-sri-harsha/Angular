import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from 'src/app/components/models/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  constructor(
    private _productService: ProductService,
    private _httpClient: HttpClient
  ) {}

  categories!: string[];
  types!: string[];

  ngOnInit(): void {
    this._productService.getDistinctCategory().subscribe({
      next: (data) => (this.categories = data),
    });
  }
  addProduct = (addForm: NgForm) => {
    console.log(addForm.value);
    let product: Product = addForm.value;
    this._productService.addProduct(product).subscribe({
      next: (data) => console.log(data),
    });
  };
}
