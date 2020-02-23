import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { BooksBackendService } from '../books/services/books-backend.service';
import {
  getBooks,
  getBooksFail,
  getBooksSuccess,
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
import { FavoritesBooksService } from '../favorites-books/services/favorites-books.service';
import { AuthenticationService } from '../user-access/services/authentication.service';
import { Book } from '../books/models/book.model';

@Injectable()
export class BooksEffects {
  public getBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getBooks),
      switchMap(action => {
        return this.bookBackendService.getBooks().pipe(
          map(res => getBooksSuccess({ books: res })),
          catchError(err => of(getBooksFail()))
        );
      })
    );
  });

  public getFavoritesBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getFavoritesBooks),
      switchMap(action => {
        return this.favoritesBooksService
          .getFavoritesBooks(this.authenticationService.currentUserValue()?.customerId)
          .pipe(
            map(res => getFavoritesBooksSuccess({ books: res })),
            catchError(err => of(getFavoritesBooksFail()))
          );
      })
    );
  });

  public addFavoriteBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addFavoriteBook),
      switchMap(action => {
        return this.favoritesBooksService
          .postFavoritesBooks(this.authenticationService.currentUserValue().customerId, action.book.id)
          .pipe(
            map(res => addFavoriteBookSuccess({ book: action.book })),
            catchError(err => of(addFavoriteBookFail()))
          );
      })
    );
  });

  public deleteBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteFavoritesBook),
      switchMap(action => {
        return this.favoritesBooksService
          .deleteFavoritesBooks(this.authenticationService.currentUserValue().customerId, action.book.id)
          .pipe(
            map(res => deleteFavoritesBookSuccess({ book: action.book })),
            catchError(err => of(deleteFavoritesBookFail()))
          );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private bookBackendService: BooksBackendService,
    private favoritesBooksService: FavoritesBooksService,
    private authenticationService: AuthenticationService
  ) {}
}
