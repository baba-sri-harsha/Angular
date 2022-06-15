import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/service/book-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  categories: string[] = [];

  constructor(private _bookService: BookServiceService) {}

  ngOnInit(): void {
    this._bookService.getCategories().subscribe({
      next: (data) => (this.categories = data),
    });
  }
}
