import { createHttpFactory, SpectatorHttp, HttpMethod } from '@ngneat/spectator';

import { AuthBackendService } from './auth-backend.service';

describe('AuthBackend service testing', () => {
  let spectator: SpectatorHttp<AuthBackendService>;
  const createHttp = createHttpFactory(AuthBackendService);

  beforeEach(() => (spectator = createHttp()));

  it('should registered customer', () => {
    spectator.service.registerCustomer({data: 'testMessage'}).subscribe();

    const req = spectator.expectOne('http://localhost:5050/api/auth', HttpMethod.POST);
  });
});
