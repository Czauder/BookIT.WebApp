import { createAction, props } from '@ngrx/store';

import { Book } from '../books/models/book.model';

// all books
export const getBooks = createAction('[ALL BOOKS] Get Books from external server');
export const getBooksSuccess = createAction(
  '[ALL BOOKS] Get Books from external server Success',
  props<{ books: Book[] }>()
);
export const getBooksFail = createAction('[ALL BOOKS] Get Books from external server Fail');

// favorites books
export const getFavoritesBooks = createAction('[FAVORITES BOOKS] Get Favorites Books');
export const getFavoritesBooksSuccess = createAction(
  '[FAVORITES BOOKS] Get Favorites Books Success',
  props<{ books: Book[] }>()
);
export const getFavoritesBooksFail = createAction('[FAVORITES BOOKS] Get Favorites Books Fail');

// favorite book
export const addFavoriteBook = createAction('[FAVORITE BOOK] Add Book', props<{ book: Book }>());
export const addFavoriteBookSuccess = createAction('[FAVORITE BOOK] Add Book Success', props<{ book: Book }>());
export const addFavoriteBookFail = createAction('[FAVORITE BOOK] Add Book Fail');

export const deleteFavoritesBook = createAction('[FAVORITE BOOK] Delete Books', props<{ book: Book }>());
export const deleteFavoritesBookSuccess = createAction('[FAVORITE BOOK] delete Books Success', props<{ book: Book }>());
export const deleteFavoritesBookFail = createAction('[FAVORITE BOOK] Delete Book fail');
