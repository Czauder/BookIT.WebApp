import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { DialogLogoutComponent } from './layout-shell/components/user-menu/dialog-logout/dialog-logout.component';
import { LayoutShellModule } from './layout-shell/layout-shell.module';
import { MaterialModule } from './material/material.module';
import { UserAccessModule } from './user-access/user-access.module';
import { PricingModule } from './pricing/pricing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutShellModule,
    BooksModule,
    UserAccessModule,
    PricingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogLogoutComponent]
})
export class AppModule { }
