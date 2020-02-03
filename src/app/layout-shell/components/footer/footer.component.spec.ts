import { SpectatorWithHost, createHostComponentFactory } from '@ngneat/spectator';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let spectator: SpectatorWithHost<FooterComponent>;
  const createComponent = createHostComponentFactory({
    detectChanges: false,
    component: FooterComponent,
    declarations: [],
    imports: [],
    providers: []
  });

  beforeEach(() => {
    spectator = createComponent<FooterComponent>(`<app-footer></app-footer>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
