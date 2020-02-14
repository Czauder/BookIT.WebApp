import { createHostFactory, mockProvider, SpectatorHost } from '@ngneat/spectator';

import { AuthenticationService } from '../user-access/services/authentication.service';
import { FavoritesBooksComponent } from './favorites-books.component';
import { FavoritesBooksService } from './services/favorites-books.service';

describe('FavoritesBooksComponent', () => {
  let spectator: SpectatorHost<FavoritesBooksComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: FavoritesBooksComponent,
    declarations: [],
    imports: [],
    providers: [mockProvider(AuthenticationService), mockProvider(FavoritesBooksService)]
  });

  beforeEach(() => {
    spectator = createComponent<FavoritesBooksComponent>(`<app-favorites-books></app-favorites-books>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
