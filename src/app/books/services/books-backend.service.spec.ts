import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator';

import { BooksBackendService } from './books-backend.service';

describe('HttpClient testing', () => {
  let spectator: SpectatorHttp<BooksBackendService>;
  const createHttp = createHttpFactory(BooksBackendService);

  beforeEach(() => (spectator = createHttp()));

  it('GET all books', () => {
    spectator.service.getBooks().subscribe();
    spectator.expectOne('http://localhost:5050/api/books', HttpMethod.GET);
  });
});
