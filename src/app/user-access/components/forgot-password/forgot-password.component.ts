import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public isClickedButton: boolean;

  constructor() { }

  ngOnInit() {
  }


  public showNotification(): void {
    this.isClickedButton = true;
    console.log(this.isClickedButton);
  }
}
