import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookServiceService } from 'src/app/service/book-service.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private _cartService: CartService) {}

  books: Book[] = [];

  ngOnInit(): void {
    this.books = this._cartService.getItems();
    console.log(this.books);
  }
}
