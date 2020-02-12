import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BooksBackendService } from '../../services/books-backend.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/user-access/services/authentication.service';
import { FavoritesBooksService } from 'src/app/favorites-books/favorites-books.service';

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

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.bookBackendService.getBook(params.get('id')).subscribe(book => {
        console.log(book);
        this.book = book;
      });
    });

    if (this.authenticationsService.currentUserValue !== null) {
      this.isUser = true;
    } else {
      this.isUser = false;
    }
  }

  public addToFavorites() {
    this.favoritesBooksService.postFavoritesBooks(
      this.authenticationsService.currentUserValue.customerId,
      this.book.id
    ).subscribe();
    if (!this.isFavorite) {
      this.isFavorite = true;
      this.showToaster();
    } else {
      this.isFavorite = false;
      this.showToaster();
    }
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
