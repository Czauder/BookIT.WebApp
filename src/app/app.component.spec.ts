import { RouterOutlet } from '@angular/router';
import { createHostFactory, SpectatorHost, mockProvider } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';

import { AppComponent } from './app.component';
import { AuthenticationService } from './user-access/services/authentication.service';

describe('AppComponent', () => {
  let spectator: SpectatorHost<AppComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: AppComponent,
    declarations: [mockProvider(RouterOutlet), mockProvider(AuthenticationService), mockProvider(AuthenticationService)]
  });

  beforeEach(() => (spectator = createComponent(`<app-root></app-root>`)));

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });
});