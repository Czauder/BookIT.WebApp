import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutShellComponent } from './layout-shell.component';
import { MaterialModule } from '../material/material.module';
import { LogoComponent } from './components/logo/logo.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { NotificationsComponent } from './components/user-menu/notifications/notifications.component';
import { DialogLogoutComponent } from './components/user-menu/dialog-logout/dialog-logout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LayoutShellComponent, LogoComponent, MainMenuComponent, UserMenuComponent, NotificationsComponent, DialogLogoutComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class LayoutShellModule { }
