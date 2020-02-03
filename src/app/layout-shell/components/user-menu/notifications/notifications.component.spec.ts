import { createHostFactory, SpectatorHost } from '@ngneat/spectator';

import { NotificationsComponent } from './notifications.component';

describe('NotificationsComponent', () => {
  let spectator: SpectatorHost<NotificationsComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: NotificationsComponent,
    declarations: [],
    imports: [],
    providers: []
  });

  beforeEach(() => {
    spectator = createComponent<NotificationsComponent>(`<app-notifications></app-notifications>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
