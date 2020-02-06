import { createHostFactory, SpectatorHost, mockProvider } from '@ngneat/spectator';

import { SignUpComponent } from './sign-up.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ValidatorsBuilder } from '../../validators/validators-builder';
import { MaterialModule } from 'src/app/material/material.module';
import { AuthBackendService } from '../../services/auth-backend.service';

describe('SignUpComponent', () => {
  let spectator: SpectatorHost<SignUpComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: SignUpComponent,
    declarations: [],
    imports: [MaterialModule],
    providers: [mockProvider(FormBuilder), mockProvider(AuthBackendService)]
  });

  beforeEach(() => {
    spectator = createComponent<SignUpComponent>(`<app-sign-up></app-sign-up>`);

    const validationBuilder = new ValidatorsBuilder();
    const nameValidator = validationBuilder
      .setName()
      .setRequired()
      .setMaxLength(100)
      .build();

    const phoneValidator = validationBuilder
      .setMaxLength(30)
      .setMinLength(9)
      .setRequired()
      .setPhone()
      .build();

    const emailValidator = validationBuilder
      .setMaxLength(100)
      .setRequired()
      .setEmail()
      .build();

    const passwordValidator = validationBuilder
      .setPassword()
      .setMinLength(5)
      .setRequired()
      .build();

    spectator.component.registerForm = new FormBuilder().group({
      firstName: new FormControl(null, Validators.compose(nameValidator)),
      lastName: new FormControl(null, Validators.compose(nameValidator)),
      phone: new FormControl(null, Validators.compose(phoneValidator)),
      password: new FormControl(null, Validators.compose(passwordValidator)),
      email: new FormControl(null, Validators.compose(emailValidator))
    });
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should have inputs', () => {
    expect(spectator.query('firstName')).toBeDefined();
    expect(spectator.query('lastName')).toBeDefined();
    expect(spectator.query('phone')).toBeDefined();
    expect(spectator.query('password')).toBeDefined();
    expect(spectator.query('email')).toBeDefined();
  });
});
