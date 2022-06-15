import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookServiceService } from 'src/app/service/book-service.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  constructor(
    private _bookService: BookServiceService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _cartService: CartService
  ) {}

  displayedColumns = ['title', 'author', 'category'];

  books: Book[] = [];

  category: string = '';

  cartItems: Book[] = [];

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((map) => {
      let cat = map.get('category');
      if (cat) this.category = cat;
      this._bookService.getBooksByCategory(this.category).subscribe({
        next: (data) => (this.books = data),
      });
    });
  }

  toDescribe = (book: Book) => {
    // use router to navigate to productDetailsComponent
    this._router.navigate(['/book-details', book.bookId]);
  };

  addToCart = (book: Book) => {
    // use router to navigate to productDetailsComponent
    this._cartService.addToCart(book);
  };
}
