import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState, selectBooks } from 'src/app/store/state';

import { Book } from '../../models/book.model';

@Component({
  selector: 'app-books-library',
  templateUrl: './books-library.component.html',
  styleUrls: ['./books-library.component.scss']
})
export class BooksLibraryComponent implements OnInit {
  public books: Book[] = [];

  constructor(private store: Store<ApplicationState>) {}

  public ngOnInit(): void {
    this.store.select(selectBooks).subscribe(books => {
      this.books = books;
    });
  }
}
