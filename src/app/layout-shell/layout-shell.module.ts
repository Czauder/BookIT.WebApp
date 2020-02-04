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
import { FooterComponent } from './components/footer/footer.component';
import { GlobalNavComponent } from './components/global-nav/global-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    LayoutShellComponent,
    LogoComponent,
    MainMenuComponent,
    UserMenuComponent,
    NotificationsComponent,
    DialogLogoutComponent,
    FooterComponent,
    GlobalNavComponent
  ],
  imports: [CommonModule, MaterialModule, RouterModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule]
})
export class LayoutShellModule {}
