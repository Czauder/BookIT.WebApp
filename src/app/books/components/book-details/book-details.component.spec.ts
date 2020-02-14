import { Router, ActivatedRoute } from '@angular/router';
import { createHostFactory, mockProvider, SpectatorHost } from '@ngneat/spectator';
import { ToastrService } from 'ngx-toastr';
import { FavoritesBooksService } from 'src/app/favorites-books/services/favorites-books.service';
import { AuthenticationService } from 'src/app/user-access/services/authentication.service';

import { BooksBackendService } from '../../services/books-backend.service';
import { BookDetailsComponent } from './book-details.component';

describe('BookDetailsComponent', () => {
  let spectator: SpectatorHost<BookDetailsComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: BookDetailsComponent,
    declarations: [],
    imports: [],
    providers: [
      mockProvider(ToastrService),
      mockProvider(BooksBackendService),
      mockProvider(Router),
      mockProvider(AuthenticationService),
      mockProvider(FavoritesBooksService),
      mockProvider(ActivatedRoute)
    ]
  });

  beforeEach(() => {
    spectator = createComponent<BookDetailsComponent>(`<app-book-details></app-book-details>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
