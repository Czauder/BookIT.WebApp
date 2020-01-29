import { TestBed } from '@angular/core/testing';

import { BooksBackendService } from './books-backend.service';

describe('BooksBackendService', () => {
  let service: BooksBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
