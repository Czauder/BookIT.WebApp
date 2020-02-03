import { SpectatorWithHost, createHostComponentFactory } from '@ngneat/spectator';
import { NotificationsComponent } from './notifications.component';

describe('NotificationsComponent', () => {
  let spectator: SpectatorWithHost<NotificationsComponent>;
  const createComponent = createHostComponentFactory({
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
