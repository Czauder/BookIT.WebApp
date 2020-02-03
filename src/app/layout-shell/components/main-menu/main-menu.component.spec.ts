import { createHostFactory, SpectatorHost } from '@ngneat/spectator';

import { MainMenuComponent } from './main-menu.component';

describe('MainMenuComponent', () => {
  let spectator: SpectatorHost<MainMenuComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: MainMenuComponent,
    declarations: [],
    imports: [],
    providers: []
  });

  beforeEach(() => {
    spectator = createComponent<MainMenuComponent>(`<app-main-menu></app-main-menu>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
