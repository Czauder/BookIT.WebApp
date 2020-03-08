import { createReducer, on, Action, ReducerManager } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Book } from 'src/app/books/models/book.model';
import { getBooks, getBooksSuccess, getBooksFail } from '../action';

export const booksStateKey = 'bookState';

export interface BooksState extends EntityState<Book> {
  isLoading: boolean;
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>({
  selectId: book => book.id,
  sortComparer: book => book.name
});

export const initialState: BooksState = adapter.getInitialState({
  isLoading: false
});

const reducer = createReducer(
  initialState,
  on(getBooks, state => ({ ...state, isLoading: true })),
  on(getBooksSuccess, (state, { books }) => {
    return adapter.addAll(books, {
      ...state,
      isLoading: false
    });
  }),
  on(getBooksFail, state => ({ ...state, isLoading: false }))
);

export function booksReducer(state: BooksState, action: Action): BooksState {
  return reducer(state, action);
}

export const booksAdapterSelectors = adapter.getSelectors();
