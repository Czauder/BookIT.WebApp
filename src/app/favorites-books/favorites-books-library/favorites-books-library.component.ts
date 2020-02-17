import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/books/models/book.model';
import { FavoritesBooksService } from '../services/favorites-books.service';
import { AuthenticationService } from 'src/app/user-access/services/authentication.service';

@Component({
  selector: 'app-favorites-books-library',
  templateUrl: './favorites-books-library.component.html',
  styleUrls: ['./favorites-books-library.component.scss']
})
export class FavoritesBooksLibraryComponent implements OnInit {
  public favoritesBooks: Book[];

  constructor(
    private favoritesBookService: FavoritesBooksService,
    private authenticationService: AuthenticationService
  ) {}

 public ngOnInit(): void {
    this.favoritesBookService
      .getFavoritesBooks(this.authenticationService.currentUserValue().customerId)
      .subscribe(favoritesBooks => {
        this.favoritesBooks = favoritesBooks;
      } );
  }
}
