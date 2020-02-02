import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ValidatorsBuilder } from '../../validators/validators-builder';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  public isClickedButton: boolean;
  public showPwd = false;
  public showConfirm = false;
  public resetPasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    const validationBuilder = new ValidatorsBuilder();
    const passwordValidator = validationBuilder
      .setPassword()
      .setMinLength(5)
      .setRequired()
      .build();

    this.resetPasswordForm = this.formBuilder.group({
      password: new FormControl(null, Validators.compose(passwordValidator)),
      confirm: new FormControl(null, Validators.compose(passwordValidator))
    });
  }

  public showNotification(): void {
    this.isClickedButton = true;
    console.log(this.isClickedButton);
  }

  public showPassword(): void {
    this.showPwd = !this.showPwd;  
  }

  public showConfirmPassword(): void {
    this.showConfirm = !this.showConfirm;
  }
}
