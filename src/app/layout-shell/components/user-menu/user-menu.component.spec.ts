import { MatDialog } from '@angular/material';
import { createHostFactory, mockProvider, SpectatorHost } from '@ngneat/spectator';
import { MaterialModule } from 'src/app/material/material.module';
import { AuthenticationService } from 'src/app/user-access/services/authentication.service';

import { UserMenuComponent } from './user-menu.component';

describe('UserMenuComponent', () => {
  let spectator: SpectatorHost<UserMenuComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: UserMenuComponent,
    declarations: [],
    imports: [MaterialModule],
    providers: [MatDialog, mockProvider(AuthenticationService)]
  });

  beforeEach(() => {
    spectator = createComponent<UserMenuComponent>(`<app-user-menu></app-user-menu>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
