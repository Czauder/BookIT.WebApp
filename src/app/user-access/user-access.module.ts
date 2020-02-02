import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccessComponent } from './user-access.component';
import { UserAccessRoutingModule } from './user-access-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserAccessComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [CommonModule, UserAccessRoutingModule, RouterModule, MaterialModule, FormsModule, ReactiveFormsModule]
})
export class UserAccessModule {}
