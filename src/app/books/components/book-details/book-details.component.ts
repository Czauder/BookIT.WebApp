import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  public isFavorite = false;
  constructor(private toastr: ToastrService) {}

  ngOnInit() {}

  public addToFavorites() {
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
