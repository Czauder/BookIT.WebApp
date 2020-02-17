import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../user-access/services/authentication.service';
import { Book } from '../books/models/book.model';
import { FavoritesBooksService } from './services/favorites-books.service';

@Component({
  selector: 'app-favorites-books',
  templateUrl: './favorites-books.component.html',
  styleUrls: ['./favorites-books.component.scss']
})
export class FavoritesBooksComponent implements OnInit {
  public isAddedBook: Book[] = [];

  constructor(
    private favoritesBooksService: FavoritesBooksService,
    private authenticationService: AuthenticationService
  ) {}

  public ngOnInit(): void {
    this.favoritesBooksService
      .getFavoritesBooks(this.authenticationService.currentUserValue().customerId)
      .subscribe(favoritesBooks => {
        this.isAddedBook = favoritesBooks;
      });
  }

  // public setContent() {
  //   if(this.isAddedBook.length) {
  //     return {
  //       showContent:
  //     }
  //   }
  // }
}
