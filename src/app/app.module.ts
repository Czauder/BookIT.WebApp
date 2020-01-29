import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogLogoutComponent } from './layout-shell/components/user-menu/dialog-logout/dialog-logout.component';
import { LayoutShellModule } from './layout-shell/layout-shell.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [MaterialModule, BrowserModule, AppRoutingModule, BrowserAnimationsModule, LayoutShellModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogLogoutComponent]
})
export class AppModule {}
