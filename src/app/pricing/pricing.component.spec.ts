import { createHostFactory, mockProvider, SpectatorHost } from '@ngneat/spectator';
import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../user-access/services/authentication.service';
import { PricingComponent } from './pricing.component';
import { SubscriptionsService } from './services/subscriptions.service';

describe('PricingComponent', () => {
  let spectator: SpectatorHost<PricingComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: PricingComponent,
    declarations: [],
    imports: [],
    providers: [mockProvider(SubscriptionsService), mockProvider(ToastrService), mockProvider(AuthenticationService)]
  });

  beforeEach(() => {
    spectator = createComponent<PricingComponent>(`<app-pricing></app-pricing>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
