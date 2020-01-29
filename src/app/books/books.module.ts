import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksLibraryComponent } from './components/books-library/books-library.component';
import { BooksBackendService } from './services/books-backend.service';

@NgModule({
  declarations: [BooksComponent, BooksLibraryComponent, BookDetailsComponent],
  imports: [CommonModule, MaterialModule, BooksRoutingModule],
  providers: [BooksBackendService]
})
export class BooksModule {}
