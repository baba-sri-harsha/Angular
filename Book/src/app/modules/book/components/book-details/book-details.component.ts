import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookServiceService } from 'src/app/service/book-service.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  constructor(
    private _bookService: BookServiceService,
    private _activatedRoute: ActivatedRoute
  ) {}

  books!: Book;
  bookId!: number;

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((map) => {
      let id = map.get('bookId');
      if (id) this.bookId = Number(id);
      this._bookService.getBookById(this.bookId).subscribe({
        next: (data) => (this.books = data),
      });
    });
  }
}
