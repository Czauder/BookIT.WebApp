import { SpectatorWithHost, createHostComponentFactory } from '@ngneat/spectator';
import { UserAccessComponent } from './user-access.component';

fdescribe('UserAccessComponent', () => {
  let spectator: SpectatorWithHost<UserAccessComponent>;
  const createComponent = createHostComponentFactory({
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
