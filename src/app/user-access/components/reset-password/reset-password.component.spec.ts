import { createHostComponentFactory, SpectatorWithHost } from '@ngneat/spectator';

import { ResetPasswordComponent } from './reset-password.component';

describe('ResetPasswordComponent', () => {
  let spectator: SpectatorWithHost<ResetPasswordComponent>;
  const createComponent = createHostComponentFactory({
    detectChanges: false,
    component: ResetPasswordComponent,
    declarations: [],
    imports: [],
    providers: []
  });

  beforeEach(() => {
    spectator = createComponent<ResetPasswordComponent>(`<app-reset-password></app-reset-password>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
