import { Component, OnInit } from '@angular/core';
import { FavoritesBooksService } from './favorites-books.service';
import { AuthenticationService } from '../user-access/services/authentication.service';
import { Book } from '../books/models/book.model';

@Component({
  selector: 'app-favorites-books',
  templateUrl: './favorites-books.component.html',
  styleUrls: ['./favorites-books.component.scss']
})
export class FavoritesBooksComponent implements OnInit {
  public favoritesBooks: Book[];

  constructor(
    private favoritesBookService: FavoritesBooksService,
    private authenticationService: AuthenticationService
  ) {}

 public ngOnInit(): void {
    this.favoritesBookService
      .getFavoritesBooks(this.authenticationService.currentUserValue.customerId)
      .subscribe(favoritesBooks => {
        this.favoritesBooks = favoritesBooks;
        console.log(this.favoritesBooks);
      } );
  }
}
