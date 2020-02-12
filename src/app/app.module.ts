import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogLogoutComponent } from './layout-shell/components/user-menu/dialog-logout/dialog-logout.component';
import { LayoutShellModule } from './layout-shell/layout-shell.module';
import { MaterialModule } from './material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { FavoritesBooksComponent } from './favorites-books/favorites-books.component';
import { JwtInterceptor } from './user-access/services/helpers/jwt.interceptor';
import { ErrorInterceptor } from './user-access/services/helpers/error.interceptor';
import { FavoritesBooksLibraryComponent } from './favorites-books/favorites-books-library/favorites-books-library.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, AboutComponent, FavoritesBooksComponent, FavoritesBooksLibraryComponent],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutShellModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      preventDuplicates: true
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogLogoutComponent]
})
export class AppModule {}
