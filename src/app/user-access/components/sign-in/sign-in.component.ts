import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../../services/authentication.service';
import { ValidatorsBuilder } from '../../validators/validators-builder';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted = false;
  public returnUrl: string;
  public showPwd = false;
  public errors: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService
  ) {
    if (this.authenticationService.currentUserValue()) {
      this.router.navigate(['/']);
    }
  }

  public ngOnInit(): void {
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

    this.loginForm = this.formBuilder.group({
      email: new FormControl(null, Validators.compose(emailValidator)),
      password: new FormControl(null, Validators.compose(passwordValidator))
    });

    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // easy acces to form fields
  get f(): any {
    return this.loginForm.controls;
  }

  public showPassword(): void {
    this.showPwd = !this.showPwd;
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      this.authenticationService.login(this.loginForm.value).subscribe(
        response => {
          this.router.navigate(['/books']);
        },
        error => {
          this.errors = error;
          this.showToaster();
        }
      );
    }
  }

  public showToaster(): void {
    this.toastr.error(`It's something wrong! \uD83D\uDE22 ${this.errors.statusText} ${this.errors.status}!`, '', {
      progressBar: true,
      positionClass: 'toast-bottom-full-width'
    });
  }
}
