import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../services/authentication.service';
import { ValidatorsBuilder } from '../../validators/validators-builder';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public isSubmitted = false;
  public showPwd = false;
  public showConfirm = false;
  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService) {}

  public ngOnInit(): void {
    const validationBuilder = new ValidatorsBuilder();
    const nameValidator = validationBuilder
      .setName()
      .setRequired()
      .setMaxLength(50)
      .build();

    const emailValidator = validationBuilder
      .setMaxLength(100)
      .setRequired()
      .setEmail()
      .build();

    const phoneValidator = validationBuilder
      .setMaxLength(20)
      .setMinLength(9)
      .setRequired()
      .setPhone()
      .build();

    const passwordValidator = validationBuilder
      .setPassword()
      .setMinLength(5)
      .setRequired()
      .build();

    this.registerForm = this.formBuilder.group({
      firstName: new FormControl(null, Validators.compose(nameValidator)),
      lastName: new FormControl(null, Validators.compose(nameValidator)),
      email: new FormControl(null, Validators.compose(emailValidator)),
      phone: new FormControl(null, Validators.compose(phoneValidator)),
      password: new FormControl(null, Validators.compose(passwordValidator)),
      confirm: new FormControl(null, Validators.compose(passwordValidator))
    });
  }

  public showPassword(): void {
    this.showPwd = !this.showPwd;
  }

  public showConfirmPassword(): void {
    this.showConfirm = !this.showConfirm;
  }

  public isPositive(): boolean {
    return (
      this.registerForm.get('confirm').valid &&
      this.registerForm.get('confirm').dirty &&
      this.registerForm.get('pass').value === this.registerForm.get('confirm').value
    );
  }

  public onSubmit(): void {
    if (this.registerForm.valid) {
      this.authenticationService.registerCustomer(this.registerForm.value).subscribe(response => response);
    }
    this.isSubmitted = true;
  }
}
