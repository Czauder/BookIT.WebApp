import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Book } from '../books/models/book.model';
import { FavoriteBooksState } from '../store/reducers/favorite-book.reducer';
import { selectFavoritesBooks } from '../store/selectors/favorite-books.selector';

@Component({
  selector: 'app-favorites-books',
  templateUrl: './favorites-books.component.html',
  styleUrls: ['./favorites-books.component.scss']
})
export class FavoritesBooksComponent implements OnInit {
  public isAddedBook: Book[] = [];

  constructor(private store: Store<FavoriteBooksState>) {}

  public ngOnInit(): void {
    this.store.select(selectFavoritesBooks).subscribe(favoritesBooks => (this.isAddedBook = favoritesBooks));
  }
}
