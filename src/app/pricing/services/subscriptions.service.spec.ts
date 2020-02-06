import { createHttpFactory, SpectatorHttp, HttpMethod } from '@ngneat/spectator';

import { SubscriptionsService } from './subscriptions.service';
import { SubscriptionType } from '../subscription-type.enum';

describe('Subscriptions service testing', () => {
  let spectator: SpectatorHttp<SubscriptionsService>;
  const createHttp = createHttpFactory(SubscriptionsService);

  beforeEach(() => (spectator = createHttp()));

  it('should added subscriptions', () => {
    spectator.service.addSubscriptions(SubscriptionType.Year).subscribe();

    const req = spectator.expectOne('http://localhost:5050/api/subscriptions', HttpMethod.POST);
  });
});
