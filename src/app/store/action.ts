import { createAction, props } from '@ngrx/store';

import { Book } from '../books/models/book.model';

export const getBooks = createAction('[ALL BOOKS] Get Books from external server');
export const getBooksSuccess = createAction(
  '[ALL BOOKS] Get Books from external server Success',
  props<{ books: Book[] }>()
);
export const getBooksFail = createAction('[ALL BOOKS] Get Books from external server Fail');

