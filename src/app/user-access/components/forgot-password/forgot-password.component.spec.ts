import { createHostFactory, SpectatorHost } from '@ngneat/spectator';

import { ForgotPasswordComponent } from './forgot-password.component';

describe('ForgotPasswordComponent', () => {
  let spectator: SpectatorHost<ForgotPasswordComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: ForgotPasswordComponent,
    declarations: [],
    imports: [],
    providers: []
  });

  beforeEach(() => {
    spectator = createComponent<ForgotPasswordComponent>(`<app-forgot-password></app-forgot-password>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
