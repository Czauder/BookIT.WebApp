import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutShellComponent } from './layout-shell/layout-shell.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PricingComponent } from './pricing/pricing.component';
import { FavoritesBooksComponent } from './favorites-books/favorites-books.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  {
    path: '',
    component: LayoutShellComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'books',
        loadChildren: () => import('./books/books.module').then(mod => mod.BooksModule)
      },
      {
        path: 'pricing',
        component: PricingComponent
      },
      {
        path: 'favorites',
        component: FavoritesBooksComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  },
  {
    path: 'access',
    children: [
      {
        path: '',
        loadChildren: () => import('./user-access/user-access.module').then(mod => mod.UserAccessModule)
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
