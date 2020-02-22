import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { createHostFactory, mockProvider, SpectatorHost } from '@ngneat/spectator';
import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../../services/authentication.service';
import { ValidatorsBuilder } from '../../validators/validators-builder';
import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let spectator: SpectatorHost<SignInComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: SignInComponent,
    declarations: [],
    imports: [],
    providers: [
      mockProvider(FormBuilder),
      mockProvider(ActivatedRoute),
      mockProvider(AuthenticationService),
      mockProvider(Router),
      mockProvider(ToastrService)
    ]
  });

  beforeEach(() => {
    spectator = createComponent<SignInComponent>(`<app-sign-in></app-sign-in>`);

    const validationBuilder = new ValidatorsBuilder();
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

    spectator.component.loginForm = new FormBuilder().group({
      email: new FormControl(null, Validators.compose(emailValidator)),
      password: new FormControl(null, Validators.compose(passwordValidator))
    });
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
