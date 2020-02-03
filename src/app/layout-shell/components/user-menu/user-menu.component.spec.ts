import { createHostFactory, SpectatorHost } from '@ngneat/spectator';

import { UserMenuComponent } from './user-menu.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatDialog } from '@angular/material';


describe('UserMenuComponent', () => {
  let spectator: SpectatorHost<UserMenuComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: UserMenuComponent,
    declarations: [],
    imports: [MaterialModule],
    providers: [MatDialog]
  });

  beforeEach(() => {
    spectator = createComponent<UserMenuComponent>(`<app-user-menu></app-user-menu>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
