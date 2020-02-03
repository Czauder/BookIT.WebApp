import { createHostFactory, SpectatorHost } from '@ngneat/spectator';

import { PricingComponent } from './pricing.component';

describe('PricingComponent', () => {
  let spectator: SpectatorHost<PricingComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: PricingComponent,
    declarations: [],
    imports: [],
    providers: []
  });

  beforeEach(() => {
    spectator = createComponent<PricingComponent>(`<app-pricing></app-pricing>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
