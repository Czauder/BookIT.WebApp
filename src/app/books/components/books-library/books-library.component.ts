import { Component, OnInit } from '@angular/core';
import { Book } from './book-card/book-card.component';

@Component({
  selector: 'app-books-library',
  templateUrl: './books-library.component.html',
  styleUrls: ['./books-library.component.scss']
})
export class BooksLibraryComponent implements OnInit {
  public books: Book[] = [
    {
      title: 'JavaScript',
      spec: 'Frontend',
      pages: 200,
      tags: ['es6', 'functional programming']
    },
    {
      title: 'JavaScript',
      spec: 'Frontend',
      pages: 200,
      tags: ['es6', 'functional programming']
    }
  ];

  constructor() {}

  ngOnInit() {}
}
