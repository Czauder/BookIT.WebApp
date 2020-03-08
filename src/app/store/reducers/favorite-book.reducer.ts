import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Book } from 'src/app/books/models/book.model';

import {
  addFavoriteBook,
  addFavoriteBookFail,
  addFavoriteBookSuccess,
  deleteFavoritesBook,
  deleteFavoritesBookFail,
  deleteFavoritesBookSuccess,
  getFavoritesBooks,
  getFavoritesBooksFail,
  getFavoritesBooksSuccess,
} from '../action';

export const favoriteBooksStateKey = 'favoriteBooksState';

export interface FavoriteBooksState extends EntityState<Book> {
  isLoading: boolean;
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>({
  selectId: book => book.id,
  sortComparer: book => book.name
});

export const initialState: FavoriteBooksState = adapter.getInitialState({
  isLoading: false
});

const reducer = createReducer(
  initialState,
  on(getFavoritesBooks, state => ({ ...state, isLoading: true })),
  on(getFavoritesBooksSuccess, (state, { books }) => {
    return adapter.addAll(books, {
      ...state,
      isLoading: false
    });
  }),

  on(getFavoritesBooksFail, state => ({ ...state, isLoading: false })),

  on(addFavoriteBook, (state, { book }) => {
    return adapter.addOne(book, {
      ...state,
      isLoading: true
    });
  }),
  on(addFavoriteBookSuccess, state => ({
    ...state,
    isLoading: false
  })),

  on(addFavoriteBookFail, (state, action) => {
    return adapter.removeOne(action.book.id, {
      ...state,
      isLoading: false
    });
  }),
  on(deleteFavoritesBook, (state, action) => {
    return adapter.removeOne(action.book.id, { ...state, isLoading: true });
  }),
  on(deleteFavoritesBookSuccess, state => ({
    ...state,
    isLoading: false
  })),
  on(deleteFavoritesBookFail, (state, action) => {
    return adapter.addOne(action.book, { ...state, isLoading: false });
  })
);

export function favoriteBooksReducer(state: FavoriteBooksState, action: Action): FavoriteBooksState {
  return reducer(state, action);
}

export const favoriteBooksAdapterSelectors = adapter.getSelectors();
