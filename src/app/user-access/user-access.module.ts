import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserAccessRoutingModule } from './user-access-routing.module';
import { UserAccessComponent } from './user-access.component';

@NgModule({
  declarations: [
    UserAccessComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [CommonModule, UserAccessRoutingModule, RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  providers: []
})
export class UserAccessModule {}
