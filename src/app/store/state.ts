import { Book } from '../books/models/book.model';
import { User } from '../user-access/models/user.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const booksStateKey = 'bookState';

export interface ApplicationState {
  Books: Book[];
  FavoritesBooks: Book[];
  isLoading: boolean;
  User: User[];
}

export const initialState: ApplicationState = {
  Books: [],
  FavoritesBooks: [],
  isLoading: false,
  User: []
};

export const selectApplicationState = createFeatureSelector<ApplicationState>(booksStateKey);
export const selectBooks = createSelector(selectApplicationState, state => state.Books);

export const isLoading = createSelector(selectApplicationState, state => state.isLoading);

export const selectBookId = createSelector(selectBooks, (books, props) => {
  if (books) {
    return books.find(book => {
      return book.id === props.id;
    });
  } else {
    return null;
  }
});

export const selectFavoritesBooks = createSelector(selectApplicationState, state => state.FavoritesBooks);

export const selectIsFavorites = createSelector(selectFavoritesBooks, (books, props) => {
  return books.some(book => book.id === props.book.id);
});
