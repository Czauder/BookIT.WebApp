import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs/operators';
import { FavoritesBooksService } from 'src/app/favorites-books/services/favorites-books.service';
import { SubscriptionsService } from 'src/app/pricing/services/subscriptions.service';
import { ApplicationState, selectBookId } from 'src/app/store/state';
import { AuthenticationService } from 'src/app/user-access/services/authentication.service';

import { BooksBackendService } from '../../services/books-backend.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  public isFavorite = false;
  public book: any;
  public isSubscriber: boolean;

  constructor(
    private toastr: ToastrService,
    private bookBackendService: BooksBackendService,
    private route: ActivatedRoute,
    private authenticationsService: AuthenticationService,
    private favoritesBooksService: FavoritesBooksService,
    private subscriptionsService: SubscriptionsService,
    private store: Store<ApplicationState>
  ) {}
h
  // this.bookBackendService.getBook(params.get('id')).subscribe(book => {
  //   this.book = book;

  public ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //  this.store.select(selectBookId, {id: params.get('id')}).subscribe(book => {
    //     this.book = book;
    //   });

    //   this.favoritesBooksService
    //     .getFavoritesBooks(this.authenticationsService.currentUserValue().customerId)
    //     .subscribe(fav => {
    //       const exists = fav.some(e => e.id === this.book.id);
    //       if (fav && exists) {
    //         this.isFavorite = true;
    //       } else {
    //         this.isFavorite = false;
    //       }
    //     });
    // });
    this.route.paramMap
      .pipe(
        switchMap(params => {
          return this.store.select(selectBookId, { id: params.get('id') });
        })
      )
      .subscribe(book => {
        this.book = book;
      });

    this.checkSubscriber();
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
    this.favoritesBooksService
      .deleteFavoritesBooks(this.authenticationsService.currentUserValue().customerId, this.book.id)
      .subscribe(a => a);
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

  public checkSubscriber(): void {
    if(this.authenticationsService.currentUserValue())
    if (this.authenticationsService.currentUserValue().role === 'Subscriber') {
      this.isSubscriber = true;
    } else {
      this.isSubscriber = false;
    }
  }
}
