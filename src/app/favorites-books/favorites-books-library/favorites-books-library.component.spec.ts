import { createHostFactory, mockProvider, SpectatorHost } from '@ngneat/spectator';
import { FavoritesBooksService } from 'src/app/favorites-books/services/favorites-books.service';
import { AuthenticationService } from 'src/app/user-access/services/authentication.service';

import { FavoritesBooksLibraryComponent } from './favorites-books-library.component';

describe('FavoritesBooksLibraryComponent', () => {
  let spectator: SpectatorHost<FavoritesBooksLibraryComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: FavoritesBooksLibraryComponent,
    declarations: [],
    imports: [],
    providers: [
      mockProvider(AuthenticationService),
      mockProvider(FavoritesBooksService),
    ]
  });

  beforeEach(() => {
    spectator = createComponent<FavoritesBooksLibraryComponent>(`<app-favorites-books-library></app-favorites-books-library>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
