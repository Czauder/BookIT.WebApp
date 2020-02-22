import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { createHostFactory, mockProvider, SpectatorHost } from '@ngneat/spectator';

import { ValidatorsBuilder } from '../../validators/validators-builder';
import { ResetPasswordComponent } from './reset-password.component';

describe('ResetPasswordComponent', () => {
  let spectator: SpectatorHost<ResetPasswordComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: ResetPasswordComponent,
    declarations: [],
    imports: [],
    providers: [mockProvider(FormBuilder)]
  });

  beforeEach(() => {
    spectator = createComponent<ResetPasswordComponent>(`<app-reset-password></app-reset-password>`);

    const validationBuilder = new ValidatorsBuilder();
    const passwordValidator = validationBuilder
      .setPassword()
      .setMinLength(5)
      .setRequired()
      .build();
    spectator.component.resetPasswordForm = new FormBuilder().group({
      password: new FormControl(null, Validators.compose(passwordValidator)),
      confirm: new FormControl(null, Validators.compose(passwordValidator))
    });
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
