import { createSelector } from '@ngrx/store';
import { selectFeature } from '.';
import { favoriteBooksAdapterSelectors } from '../reducers/favorite-book.reducer';

export const selectFavoriteBookState = createSelector(selectFeature, state => state.favoriteBooksState);

export const selectFavoritesBooksEntities = createSelector(selectFavoriteBookState, favoriteBooksAdapterSelectors.selectEntities);
 
export const selectFavoriteBookId = createSelector(selectFavoritesBooksEntities, (books, props) => books[props.id]);

export const selectFavoritesBooks = createSelector(selectFavoriteBookState, favoriteBooksAdapterSelectors.selectAll);

export const selectIsFavorites = createSelector(selectFavoritesBooksEntities, (books, props) => {
  return books.some(book => book.id === props.book.id);
});
