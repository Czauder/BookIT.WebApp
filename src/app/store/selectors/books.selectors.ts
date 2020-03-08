import { createSelector } from '@ngrx/store';

import { selectFeature } from '.';
import { booksAdapterSelectors } from '../reducers/book-reducer';

export const selectBookState = createSelector(selectFeature, state => state.bookState);
export const selectAllBooks = createSelector(selectBookState, booksAdapterSelectors.selectAll);
export const selectBooksEntities = createSelector(selectBookState, booksAdapterSelectors.selectEntities);

export const isLoading = createSelector(selectBookState, state => state.isLoading);

export const selectBookId = createSelector(selectBooksEntities, (books, props) => books[props.id]);
