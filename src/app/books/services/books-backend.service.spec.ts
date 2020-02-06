import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator';

import { BooksBackendService } from './books-backend.service';

describe('HttpClient Book-backend testing', () => {
  let spectator: SpectatorHttp<BooksBackendService>;
  const createHttp = createHttpFactory(BooksBackendService);

  beforeEach(() => (spectator = createHttp()));

  it('should GET all books', () => {
    spectator.service.getBooks().subscribe();
    spectator.expectOne('http://localhost:5050/api/books', HttpMethod.GET);
  });
});
