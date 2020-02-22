import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { DialogAccountComponent } from './components/user-menu/dialog-account/dialog-account.component';
import { DialogLogoutComponent } from './components/user-menu/dialog-logout/dialog-logout.component';
import { NotificationsComponent } from './components/user-menu/notifications/notifications.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { LayoutShellComponent } from './layout-shell.component';

@NgModule({
  declarations: [
    LayoutShellComponent,
    LogoComponent,
    MainMenuComponent,
    UserMenuComponent,
    NotificationsComponent,
    DialogLogoutComponent,
    FooterComponent,
    DialogAccountComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class LayoutShellModule {}
