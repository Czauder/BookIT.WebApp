import { Component, OnInit } from '@angular/core';

import { Book } from '../../models/book.model';
import { BooksBackendService } from '../../services/books-backend.service';

@Component({
  selector: 'app-books-library',
  templateUrl: './books-library.component.html',
  styleUrls: ['./books-library.component.scss']
})
export class BooksLibraryComponent implements OnInit {
  public books: Book[];

  constructor(private booksBackendService: BooksBackendService) {}

  public ngOnInit(): void {
    this.booksBackendService.getBooks().subscribe(books => {
      this.books = books;
    });
  }
}
