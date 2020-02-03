import { RouterOutlet } from '@angular/router';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: SpectatorHost<AppComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: AppComponent,
    declarations: [MockComponent(RouterOutlet)]
  });

  beforeEach(() => (spectator = createComponent(`<app-root></app-root>`)));

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });
});