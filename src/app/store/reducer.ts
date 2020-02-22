import { createReducer, on } from '@ngrx/store';
import { initialState } from './state';
import { getBooks, getBooksSuccess, getBooksFail, getBook, getBookSuccess, getBookFail } from './action';

export const booksReducer = createReducer(
  initialState,
  on(getBooks, state => ({ ...state, isLoading: true })),
  on(getBooksSuccess, (state, payload) => ({
    ...state,
    Books: payload.books,
    isLoading: false
  })),
  on(getBooksFail, state => ({ ...state, isLoading: false })),
  on(getBook, state => ({ ...state, isLoading: true })),
  on(getBookSuccess, (state, payload) => ({
    ...state,
    Book: payload.book,
    isLoading: false
  })),
  on(getBookFail, state => ({ ...state, isLoading: false }))
);
