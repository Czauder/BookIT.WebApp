import { createHostFactory, SpectatorHost } from '@ngneat/spectator';

import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
  let spectator: SpectatorHost<LogoComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: LogoComponent,
    declarations: [],
    imports: [],
    providers: []
  });

  beforeEach(() => {
    spectator = createComponent<LogoComponent>(`<app-logo></app-logo>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
