import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsBuilder } from '../../validators/validators-builder';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { first } from 'rxjs/operators';

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
  public error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.currentUserValue) {
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
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // easy acces to form fields
  get f() {
    console.log(this.loginForm.controls);
    return this.loginForm.controls;
  }

  public showPassword(): void {
    this.showPwd = !this.showPwd;
  }

  public onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService.login(this.f.email.value, this.f.password.value).subscribe(
      response => response,
      error => {
        this.error = error;
      }
    );

    //   this.authenticationService
    //     .login(this.f.email.value, this.f.password.value)
    //     .pipe(first())
    //     .subscribe(
    //       data => {
    //         this.router.navigate([this.returnUrl]);
    //       },
    //       error => {
    //         this.error = error;
    //       }
    //     );
    //   console.log(this.f.email.value, this.f.password.value);
    // }
  }
}
