import { createReducer, on } from '@ngrx/store';
import { initialState } from './state';
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


export const booksReducer = createReducer(
  initialState,
  on(getBooks, state => ({ ...state, isLoading: true })),
  on(getBooksSuccess, (state, action) => ({
    ...state,
    Books: [...action.books],
    isLoading: false,
    
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
    FavoritesBooks: state.FavoritesBooks.filter(book => action.book.id != book.id ),
    isLoading: false
  })),
  on(deleteFavoritesBookFail, state => ({ ...state, isLoading: false }))
);