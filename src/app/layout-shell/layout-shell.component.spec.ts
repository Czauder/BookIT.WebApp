import { createHostFactory, mockProvider, SpectatorHost } from '@ngneat/spectator';

import { AuthenticationService } from '../user-access/services/authentication.service';
import { LayoutShellComponent } from './layout-shell.component';

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
    spectator = createComponent<LayoutShellComponent>('<app-layout-shell></app-layout-shell>');
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
