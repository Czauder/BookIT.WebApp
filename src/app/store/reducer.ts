import { createReducer, on } from '@ngrx/store';
import { initialState } from './state';
import { getBooks, getBooksSuccess, getBooksFail } from './action';

export const booksReducer = createReducer(
  initialState,
  on(getBooks, state => ({ ...state, isLoading: true })),
  on(getBooksSuccess, (state, payload) => ({
    ...state,
    Books: payload.books,
    isLoading: false
  })),
  on(getBooksFail, state => ({ ...state, isLoading: false }))
);
