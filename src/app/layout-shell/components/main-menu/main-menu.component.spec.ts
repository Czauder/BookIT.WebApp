import { createHostFactory, mockProvider, SpectatorHost } from '@ngneat/spectator';
import { AuthenticationService } from 'src/app/user-access/services/authentication.service';

import { MainMenuComponent } from './main-menu.component';

describe('MainMenuComponent', () => {
  let spectator: SpectatorHost<MainMenuComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: MainMenuComponent,
    declarations: [],
    imports: [],
    providers: [mockProvider(AuthenticationService)]
  });

  beforeEach(() => {
    spectator = createComponent<MainMenuComponent>(`<app-main-menu></app-main-menu>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
