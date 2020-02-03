import { createHostFactory, SpectatorHost } from '@ngneat/spectator';

import { UserMenuComponent } from './user-menu.component';


describe('UserMenuComponent', () => {
  let spectator: SpectatorHost<UserMenuComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: UserMenuComponent,
    declarations: [],
    imports: [],
    providers: []
  });

  beforeEach(() => {
    spectator = createComponent<UserMenuComponent>(`<app-user-menu></app-user-menu>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
