import { createReducer, on } from '@ngrx/store';
import {
  getBooks,
  getBooksSuccess,
  getBooksFail,
  getFavoritesBooks,
  getFavoritesBooksSuccess,
  getFavoritesBooksFail,
  addFavoriteBook,
  addFavoriteBookSuccess,
  addFavoriteBookFail,
  deleteFavoritesBook,
  deleteFavoritesBookSuccess,
  deleteFavoritesBookFail
} from './action';
import { Book } from '../books/models/book.model';
import { User } from '../user-access/models/user.model';

export const booksStateKey = 'bookState';

export interface BooksState {
  Books: Book[];
  FavoritesBooks: Book[];
  isLoading: boolean;
  User: User[];
}

export const initialState: BooksState = {
  Books: [],
  FavoritesBooks: [],
  isLoading: false,
  User: []
};

export const booksReducer = createReducer(
  initialState,
  on(getBooks, state => ({ ...state, isLoading: true })),
  on(getBooksSuccess, (state, action) => ({
    ...state,
    Books: [...action.books],
    isLoading: false
  })),
  on(getBooksFail, state => ({ ...state, isLoading: false })),
  on(getFavoritesBooks, state => ({ ...state, isLoading: true })),
  on(getFavoritesBooksSuccess, (state, action) => ({
    ...state,
    FavoritesBooks: [...action.books],
    isLoading: false
  })),
  on(getFavoritesBooksFail, state => ({ ...state, isLoading: false })),
  on(addFavoriteBook, state => ({ ...state, isLoading: true })),
  on(addFavoriteBookSuccess, (state, action) => ({
    ...state,
    FavoritesBooks: [...state.FavoritesBooks, action.book],
    isLoading: false
  })),
  on(addFavoriteBookFail, state => ({ ...state, isLoading: false })),
  on(deleteFavoritesBook, state => ({ ...state, isLoading: true })),
  on(deleteFavoritesBookSuccess, (state, action) => ({
    ...state,
    FavoritesBooks: state.FavoritesBooks.filter(book => action.book.id != book.id),
    isLoading: false
  })),
  on(deleteFavoritesBookFail, state => ({ ...state, isLoading: false }))
);
