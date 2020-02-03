import { SpectatorWithHost, createHostComponentFactory } from '@ngneat/spectator';
import { UserMenuComponent } from './user-menu.component';


describe('UserMenuComponent', () => {
  let spectator: SpectatorWithHost<UserMenuComponent>;
  const createComponent = createHostComponentFactory({
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
