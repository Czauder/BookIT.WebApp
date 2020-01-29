import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BooksLibraryComponent } from './components/books-library/books-library.component';
import { MaterialModule } from '../material/material.module';
import { BooksRoutingModule } from './books-routing.module';
import { BookCardComponent } from './components/books-library/book-card/book-card.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksBackendService } from './services/books-backend.service';

@NgModule({
  declarations: [BooksComponent, BooksLibraryComponent, BookCardComponent, BookDetailsComponent],
  imports: [CommonModule, MaterialModule, BooksRoutingModule],
  providers: [BooksBackendService]
})
export class BooksModule {}
