import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';


const routes: Routes = [
  {
    path:"",
    component:BooksComponent
  },
  {
    path:"details",
    component: BookDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
