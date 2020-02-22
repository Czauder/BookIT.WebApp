import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getBooks, getBooksSuccess, getBooksFail, getBook, getBookSuccess, getBookFail } from './action';
import { switchMap, catchError, map } from 'rxjs/operators';
import { BooksBackendService } from '../books/services/books-backend.service';
import { of } from 'rxjs';

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


    // public getBook$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(getBook),
    //         switchMap(action => {
    //             return this.bookBackendService.getBook(id).pipe(
    //                 map(
    //                     res => getBookSuccess({book: res}),
    //                     catchError(err => of(getBookFail))
    //                 )
    //             )
    //         })
    //     )
    // })

  constructor(private actions$: Actions, private bookBackendService: BooksBackendService) {}
}
