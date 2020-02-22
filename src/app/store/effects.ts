import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { BooksBackendService } from '../books/services/books-backend.service';
import { getBooks, getBooksFail, getBooksSuccess } from './action';

@Injectable()
export class BooksEffects {
  public getBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getBooks),
      switchMap(action => {
        return this.bookBackendService.getBooks().pipe(
          map(
            res => getBooksSuccess({ books: res }),
            catchError(err => of(getBooksFail))
          )
        );
      })
    );
  });

  constructor(private actions$: Actions, private bookBackendService: BooksBackendService) {}
}
