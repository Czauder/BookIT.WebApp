import { createHostFactory, SpectatorHost, mockProvider } from '@ngneat/spectator';

import { PricingComponent } from './pricing.component';
import { SubscriptionsService } from './services/subscriptions.service';
import { ToastrService } from 'ngx-toastr';

describe('PricingComponent', () => {
  let spectator: SpectatorHost<PricingComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: PricingComponent,
    declarations: [],
    imports: [],
    providers: [mockProvider(SubscriptionsService), mockProvider(ToastrService)]
  });

  beforeEach(() => {
    spectator = createComponent<PricingComponent>(`<app-pricing></app-pricing>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
