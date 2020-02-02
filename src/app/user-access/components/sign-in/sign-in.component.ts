import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsBuilder } from '../../validators/validators-builder';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public loginForm: FormGroup;
  public showPwd = false;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    const validationBuilder = new ValidatorsBuilder();

    const emailValidator = validationBuilder
      .setMaxLength(100)
      .setRequired()
      .setEmail()
      .build();

    const passwordValidator = validationBuilder
      .setPassword()
      .setMinLength(8)
      .setRequired()
      .build();

    this.loginForm = this.formBuilder.group({
      email: new FormControl(null, Validators.compose(emailValidator)),
      password: new FormControl(null, Validators.compose(passwordValidator))
    });
  }

  public showPassword(): void {
    this.showPwd = !this.showPwd;  
  }
}
