import { createHostFactory, SpectatorHost, mockProvider } from '@ngneat/spectator';

import { MainMenuComponent } from './main-menu.component';
import { AuthenticationService } from 'src/app/user-access/services/authentication.service';

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
