import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Book } from '../../models/book.model';
import { BooksState } from 'src/app/store/reducer';
import { selectBooks } from 'src/app/store/selectors/books.selectors';

@Component({
  selector: 'app-books-library',
  templateUrl: './books-library.component.html',
  styleUrls: ['./books-library.component.scss']
})
export class BooksLibraryComponent implements OnInit {
  public books: Book[] = [];

  constructor(private store: Store<BooksState>) {}

  public ngOnInit(): void {
    this.store.select(selectBooks).subscribe(books => {
      this.books = books;
    });
  }
}
