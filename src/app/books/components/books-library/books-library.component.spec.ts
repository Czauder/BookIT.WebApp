import { createHostFactory, SpectatorHost } from '@ngneat/spectator';

import { BooksLibraryComponent } from './books-library.component';


describe('BooksLibraryComponent', () => {
  let spectator: SpectatorHost<BooksLibraryComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: BooksLibraryComponent,
    declarations: [],
    imports: [],
    providers: []
  });

  beforeEach(() => {
    spectator = createComponent<BooksLibraryComponent>(`<app-books-library></app-books-library>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
