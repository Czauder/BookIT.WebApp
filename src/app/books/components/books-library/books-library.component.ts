import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Book } from '../../models/book.model';

import { selectAllBooks } from 'src/app/store/selectors/books.selectors';
import { BooksState } from 'src/app/store/reducers/book-reducer';

@Component({
  selector: 'app-books-library',
  templateUrl: './books-library.component.html',
  styleUrls: ['./books-library.component.scss']
})
export class BooksLibraryComponent implements OnInit {
  public books: Book[] = [];

  constructor(private store: Store<BooksState>) {}

  public ngOnInit(): void {
    this.store.select(selectAllBooks).subscribe(books => {
      this.books = books;
    });
  }
}
