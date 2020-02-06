import { TestBed } from '@angular/core/testing';
import { AuthBackendService } from './auth-backend.service';


describe('AuthBackendService', () => {
  let service: AuthBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
