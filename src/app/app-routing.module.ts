import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutShellComponent } from './layout-shell/layout-shell.component';
import { PricingModule } from './pricing/pricing.module';
import { PricingComponent } from './pricing/pricing.component';
import { BookDetailsComponent } from './books/components/book-details/book-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  {
    path:"",
    component:LayoutShellComponent,
    children: [
      {
        path:"books",
      loadChildren: ()=>import("./books/books.module").then(mod=>mod.BooksModule)
    },
    {
      path:"pricing",
      component: PricingComponent,
    },
    {
      path:"bookdetails",
      component: BookDetailsComponent,
    }
    ]
  },
  {
    path:"access",
    children: [
      {path:"",
      loadChildren: ()=>import("./user-access/user-access.module").then(mod=>mod.UserAccessModule)
    }
    ]
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
