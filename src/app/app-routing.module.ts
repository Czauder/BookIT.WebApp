import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LayoutShellComponent } from "./layout-shell/layout-shell.component";
import { PricingComponent } from "./pricing/pricing.component";

const routes: Routes = [
  { path: "", redirectTo: "books", pathMatch: "full" },
  {
    path: "",
    component: LayoutShellComponent,
    children: [
      {
        path: "books",
        loadChildren: () =>
          import("./books/books.module").then(mod => mod.BooksModule)
      },
      {
        path: "pricing",
        component: PricingComponent
      }
    ]
  },
  {
    path: "access",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./user-access/user-access.module").then(
            mod => mod.UserAccessModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
