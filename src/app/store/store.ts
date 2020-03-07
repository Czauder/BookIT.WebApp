import { Book } from '../books/models/book.model';
import { User } from '../user-access/models/user.model';
import { createSelector, createFeatureSelector, ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { ParamsRouterState, routerKey } from './router.store';
import { booksReducer, booksStateKey, BooksState } from './reducer';

export const appKey = 'AppState';

export interface AppState {
  [routerKey]: any;
  [booksStateKey]: BooksState;
}

const reducers: ActionReducerMap<AppState> = {
  [routerKey]: routerReducer,
  [booksStateKey]: booksReducer
};

export const applicationReducer = combineReducers(reducers);
