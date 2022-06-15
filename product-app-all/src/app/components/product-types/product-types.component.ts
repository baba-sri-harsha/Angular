import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { TypeView } from '../models/type-view';

@Component({
  selector: 'app-product-types',
  templateUrl: './product-types.component.html',
  styleUrls: ['./product-types.component.css'],
})
export class ProductTypesComponent implements OnInit {
  category!: string;
  typeViews!: TypeView[];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((map) => {
      let cat = map.get('category');
      if (cat) this.category = cat;
      this._productService.getDistinctType(this.category).subscribe({
        next: (data) => (this.typeViews = data),
        complete: () => console.log(this.typeViews),
      });
    });
  }
}
