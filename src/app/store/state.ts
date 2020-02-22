import { Book } from '../books/models/book.model';
import { User } from '../user-access/models/user.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface ApplicationState {
  Books: Book[];
  isLoading: boolean;
  User: User[];
}

export const initialState: ApplicationState = {
  Books: [],
  isLoading: false,
  User: []
};

export const selectApplicationState = createFeatureSelector<ApplicationState>('books');
export const selectBooks = createSelector(selectApplicationState, state => state.Books);

export const isLoading = createSelector(selectApplicationState, state => state.isLoading);
