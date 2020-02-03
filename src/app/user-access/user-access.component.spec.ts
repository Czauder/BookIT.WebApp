import { createHostFactory, SpectatorHost } from '@ngneat/spectator';

import { UserAccessComponent } from './user-access.component';

describe('UserAccessComponent', () => {
  let spectator: SpectatorHost<UserAccessComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: UserAccessComponent,
    declarations: [],
    imports: [],
    providers: []
  });

  beforeEach(() => {
    spectator = createComponent<UserAccessComponent>(`<app-user-access></app-user-access>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
