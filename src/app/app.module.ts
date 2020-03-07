import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToastrModule } from 'ngx-toastr';

import { environment } from '../environments/environment';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritesBooksLibraryComponent } from './favorites-books/favorites-books-library/favorites-books-library.component';
import { FavoritesBooksComponent } from './favorites-books/favorites-books.component';
import { DialogLogoutComponent } from './layout-shell/components/user-menu/dialog-logout/dialog-logout.component';
import { LayoutShellModule } from './layout-shell/layout-shell.module';
import { MaterialModule } from './material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BooksEffects } from './store/effects';
import { ParamsSerializer } from './store/router.store';
import { appKey, applicationReducer } from './store/store';
import { ErrorInterceptor } from './user-access/services/helpers/error.interceptor';
import { JwtInterceptor } from './user-access/services/helpers/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AboutComponent,
    FavoritesBooksComponent,
    FavoritesBooksLibraryComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutShellModule,
    HttpClientModule,
    StoreModule.forRoot({ [appKey]: applicationReducer }),
    EffectsModule.forRoot([BooksEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    ToastrModule.forRoot({
      timeOut: 2500,
      preventDuplicates: true
    }),
    StoreRouterConnectingModule.forRoot({ serializer: ParamsSerializer })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogLogoutComponent]
})
export class AppModule {}
