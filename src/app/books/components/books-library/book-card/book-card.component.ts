import { Component, OnInit, Input } from '@angular/core';
import { BooksBackendService } from 'src/app/books/services/books-backend.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  // @Input() book: Book;
  // @Input() idx: number;

  constructor() {}

  ngOnInit() {}
}

