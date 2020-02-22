import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  public isClickedButton: boolean;
  public emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor() {}

  public showNotification(): void {
    this.isClickedButton = true;
  }
}
