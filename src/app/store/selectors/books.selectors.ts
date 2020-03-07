import { createFeatureSelector, createSelector } from '@ngrx/store';

import { appKey, AppState } from '../store';
import { selectFeature } from '.';

export const selectBookState = createSelector(selectFeature, state => state.bookState);
export const selectBooks = createSelector(selectBookState, state => state.Books);

export const isLoading = createSelector(selectBookState, state => state.isLoading);

export const selectBookId = createSelector(selectBooks, (books, props) => {
  if (books) {
    return books.find(book => {
      return book.id === props.id;
    });
  } else {
    return null;
  }
});

export const selectFavoritesBooks = createSelector(selectBookState, state => state.FavoritesBooks);

export const selectIsFavorites = createSelector(selectFavoritesBooks, (books, props) => {
  return books.some(book => book.id === props.book.id);
});

// const State = {
//     AppState:{
//         BookState:{},
//         RouterState:{}
//     }
// }

// State.AppState
// State["AppState"]
