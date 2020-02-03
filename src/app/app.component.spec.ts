import { RouterOutlet } from '@angular/router';
import {
  createHostComponentFactory,
  SpectatorWithHost
} from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: SpectatorWithHost<AppComponent>;
  const createComponent = createHostComponentFactory({
    detectChanges: false,
    component: AppComponent,
    declarations: [MockComponent(RouterOutlet)]
  });

  beforeEach(() => (spectator = createComponent(`<app-root></app-root>`)));

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });
});