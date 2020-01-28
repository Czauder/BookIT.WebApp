import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;
  @Input() idx: number;

  constructor() { }

  ngOnInit() {
  }

}
export interface Book{
  title:string,
  spec:string,
  pages:number,
  tags: string []
}
