import { createHostFactory, SpectatorHost, mockProvider } from '@ngneat/spectator';

import { BooksLibraryComponent } from './books-library.component';
import { BooksBackendService } from '../../services/books-backend.service';

describe('BooksLibraryComponent', () => {
  let spectator: SpectatorHost<BooksLibraryComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: BooksLibraryComponent,
    declarations: [],
    imports: [],
    providers: [mockProvider(BooksBackendService)]
  });

  beforeEach(() => {
    spectator = createComponent<BooksLibraryComponent>(`<app-books-library></app-books-library>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
