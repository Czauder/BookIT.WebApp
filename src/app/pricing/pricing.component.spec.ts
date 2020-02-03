import { SpectatorWithHost, createHostComponentFactory } from '@ngneat/spectator';
import { PricingComponent } from './pricing.component';

describe('PricingComponent', () => {
  let spectator: SpectatorWithHost<PricingComponent>;
  const createComponent = createHostComponentFactory({
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
