import { createHostComponentFactory, SpectatorWithHost, SpectatorHost, createHostFactory, mockProvider } from '@ngneat/spectator';

import { LayoutShellComponent } from './layout-shell.component';
import { AuthenticationService } from '../user-access/services/authentication.service';

describe('LayoutShellComponent', () => {
  let spectator: SpectatorHost<LayoutShellComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: LayoutShellComponent,
    declarations: [],
    imports: [],
    providers: [mockProvider(AuthenticationService)]
  });

  beforeEach(() => {
    spectator = createComponent<LayoutShellComponent>('<app-layout-shell></app-layout-shell>')
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});


