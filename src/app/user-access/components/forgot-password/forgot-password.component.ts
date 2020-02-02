import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public isClickedButton: boolean;
  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  constructor() {}

  ngOnInit() {}

  public showNotification(): void {
    this.isClickedButton = true;
    console.log(this.isClickedButton);
  }
}
