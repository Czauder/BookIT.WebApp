import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs/operators';
import { FavoritesBooksService } from 'src/app/favorites-books/services/favorites-books.service';
import { SubscriptionsService } from 'src/app/pricing/services/subscriptions.service';
import { AuthenticationService } from 'src/app/user-access/services/authentication.service';

import { BooksBackendService } from '../../services/books-backend.service';
import { Book } from '../../models/book.model';
import { addFavoriteBook, deleteFavoritesBook } from 'src/app/store/action';
import { BooksState } from 'src/app/store/reducer';
import { selectBookId, selectIsFavorites } from 'src/app/store/selectors/books.selectors';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  public isFavorite = false;
  public book: Book;
  public isSubscriber: boolean;

  constructor(
    private toastr: ToastrService,
    private bookBackendService: BooksBackendService,
    private route: ActivatedRoute,
    private authenticationsService: AuthenticationService,
    private favoritesBooksService: FavoritesBooksService,
    private subscriptionsService: SubscriptionsService,
    private store: Store<BooksState>
  ) {}

  public ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          return this.store.select(selectBookId, { id: params.get('id') });
        })
      )
      .subscribe(book => {
        this.book = book;
        this.store
          .select(selectIsFavorites, { book: this.book })
          .subscribe(isFavorite => (this.isFavorite = isFavorite));
      });

    this.checkSubscriber();
  }

  public handleFavorite(): void {
    if (this.isFavorite) {
      this.showToaster();
      this.store.dispatch(deleteFavoritesBook({ book: this.book }));
    } else {
      this.showToaster();
      this.store.dispatch(addFavoriteBook({ book: this.book }));
    }
  }

  public removeFromFavorites(): void {
    this.favoritesBooksService
      .deleteFavoritesBooks(this.authenticationsService.currentUserValue().customerId, this.book.id)
      .subscribe(a => a);
  }

  public showToaster(): void {
    if (!this.isFavorite) {
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

  public checkSubscriber(): void {
    if (this.authenticationsService.currentUserValue())
      if (this.authenticationsService.currentUserValue().role === 'Subscriber') {
        this.isSubscriber = true;
      } else {
        this.isSubscriber = false;
      }
  }
}
