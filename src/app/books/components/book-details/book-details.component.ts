import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BooksBackendService } from '../../services/books-backend.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/user-access/services/authentication.service';
import { FavoritesBooksService } from 'src/app/favorites-books/services/favorites-books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  public isFavorite = false;
  public book: any;
  public isUser: boolean;

  constructor(
    private toastr: ToastrService,
    private bookBackendService: BooksBackendService,
    private route: ActivatedRoute,
    private authenticationsService: AuthenticationService,
    private favoritesBooksService: FavoritesBooksService
  ) {}

  public ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.bookBackendService.getBook(params.get('id')).subscribe(book => {
        console.log(book);
        this.book = book;
      });

      this.favoritesBooksService
        .getFavoritesBooks(this.authenticationsService.currentUserValue().customerId)
        .subscribe(fav => {
          const exists = fav.some(e => e.id === this.book.id);
          if (fav && exists) {
            this.isFavorite = true;
          } else {
            this.isFavorite = false;
          }
        });
    });

    if (this.authenticationsService.currentUserValue() !== null) {
      this.isUser = true;
    } else {
      this.isUser = false;
    }
  }

  public addToFavorites(): void {
    if (!this.isFavorite) {
      this.favoritesBooksService
        .postFavoritesBooks(this.authenticationsService.currentUserValue().customerId, this.book.id)
        .subscribe();
      this.isFavorite = true;
      this.showToaster();
    } else {
      this.isFavorite = false;
      this.removeFromFavorites();
      this.showToaster();
    }
  }

  public removeFromFavorites(): void {
    console.log((this.isFavorite = false));
    this.favoritesBooksService
      .deleteFavoritesBooks(this.authenticationsService.currentUserValue().customerId, this.book.id)
      .subscribe(a => {
        console.log(a);
      });
  }

  public showToaster(): void {
    if (this.isFavorite) {
      this.toastr.success('Added to your favorites books! \uD83D\uDE0D', '', {
        progressBar: true,
        positionClass: 'toast-bottom-full-width'
      });
    } else {
      this.toastr.info('Removed form your favorites books! 😎', '', {
        progressBar: true,
        positionClass: 'toast-bottom-full-width'
      });
    }
  }
}
