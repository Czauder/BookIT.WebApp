import { Component, OnInit } from '@angular/core';

import { BooksBackendService } from '../../services/books-backend.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-books-library',
  templateUrl: './books-library.component.html',
  styleUrls: ['./books-library.component.scss']
})
export class BooksLibraryComponent implements OnInit {
  public books: Book[];

  constructor(private booksBackendService: BooksBackendService) {}

  ngOnInit() {
    this.booksBackendService.getBooks().subscribe(book => (this.books = book));
  }
}
