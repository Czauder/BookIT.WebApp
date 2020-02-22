import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { createHostFactory, mockProvider, SpectatorHost } from '@ngneat/spectator';
import { ToastrService } from 'ngx-toastr';
import { MaterialModule } from 'src/app/material/material.module';

import { AuthenticationService } from '../../services/authentication.service';
import { ValidatorsBuilder } from '../../validators/validators-builder';
import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let spectator: SpectatorHost<SignUpComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: SignUpComponent,
    declarations: [],
    imports: [MaterialModule],
    providers: [
      mockProvider(FormBuilder),
      mockProvider(AuthenticationService),
      mockProvider(Router),
      mockProvider(ToastrService)
    ]
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
