import { createHttpFactory, HttpMethod, mockProvider, SpectatorHttp } from '@ngneat/spectator';
import { AuthenticationService } from 'src/app/user-access/services/authentication.service';

import { SubscriptionType } from '../subscription-type.enum';
import { SubscriptionsService } from './subscriptions.service';

describe('Subscriptions service testing', () => {
  let spectator: SpectatorHttp<SubscriptionsService>;
  const createHttp = createHttpFactory(SubscriptionsService);

  beforeEach(() => {
    spectator = createHttp({
      providers: [
        mockProvider(
          AuthenticationService,

          {
            currentUserValue: () => {
              return {
                customerId: '3423432',
                email: 'test@gmail.com',
                firstName: 'test',
                lastName: 'test',
                password: 'test',
                role: 'test'
              };
            }
          }
        )
      ]
    });

    return spectator;
  });

  it('should added subscriptions', () => {
    spectator.get(AuthenticationService);

    spectator.service.addSubscriptions(SubscriptionType.Year).subscribe();

    spectator.expectOne('http://localhost:5050/api/subscriptions', HttpMethod.POST);
  });
});
