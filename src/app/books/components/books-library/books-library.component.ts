import { Component, OnInit } from '@angular/core';

import { BooksBackendService } from '../../services/books-backend.service';


@Component({
  selector: 'app-books-library',
  templateUrl: './books-library.component.html',
  styleUrls: ['./books-library.component.scss']
})
export class BooksLibraryComponent implements OnInit {

  constructor(private booksBackendService: BooksBackendService) {}

  ngOnInit() {
    console.log('hello world');
    this.booksBackendService.getBooks().subscribe(b => console.log(b));
  }
}
