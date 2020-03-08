import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, combineReducers } from '@ngrx/store';

import { routerKey } from './router.store';

import { favoriteBooksStateKey, FavoriteBooksState, favoriteBooksReducer } from './reducers/favorite-book.reducer';
import { booksStateKey, BooksState, booksReducer } from './reducers/book-reducer';

export const appKey = 'AppState';

export interface AppState {
  [routerKey]: any;
  [booksStateKey]: BooksState;
  [favoriteBooksStateKey]: FavoriteBooksState;
}

const reducers: ActionReducerMap<AppState> = {
  [routerKey]: routerReducer,
  [booksStateKey]: booksReducer,
  [favoriteBooksStateKey]: favoriteBooksReducer
};

export const applicationReducer = combineReducers(reducers);
