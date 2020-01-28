import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public isSubmitted = false;

  constructor() { }

  ngOnInit() {
  }


  public createAccount(): void {
    this.isSubmitted = true;
    console.log(this.isSubmitted);
  }
}
