import { SpectatorWithHost, createHostComponentFactory } from '@ngneat/spectator';
import { ForgotPasswordComponent } from './forgot-password.component';

describe('ForgotPasswordComponent', () => {
  let spectator: SpectatorWithHost<ForgotPasswordComponent>;
  const createComponent = createHostComponentFactory({
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
