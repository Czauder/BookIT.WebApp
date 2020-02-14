import { createHostFactory, SpectatorHost, mockProvider } from '@ngneat/spectator';

import { SignInComponent } from './sign-in.component';
import { ValidatorsBuilder } from '../../validators/validators-builder';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { ToastrService } from 'ngx-toastr';

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
