import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { fromEvent } from 'rxjs';

import { getBooks } from './store/action';
import { ApplicationState } from './store/state';
import { User } from './user-access/models/user.model';
import { AuthenticationService } from './user-access/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public user: User;
  public offline$ = fromEvent(window, 'offline');
  public online$ = fromEvent(window, 'online');

  public constructor(private toastr: ToastrService, private authenticationService: AuthenticationService,   private store: Store<ApplicationState>) {}
  public ngOnInit(): void {
    this.store.dispatch(getBooks());
    this.offline$.subscribe(_ =>
      this.toastr.error(`We are offline! \uD83D\uDE22 \uD83D\uDE22`, '', {
        progressBar: true,
        positionClass: 'toast-bottom-full-width'
      })
    );
    this.online$.subscribe(_ =>
      this.toastr.info(`We are online! 🙏🙏`, '', {
        progressBar: true,
        positionClass: 'toast-bottom-full-width'
      })
    );

    if (localStorage.getItem('currentUser')) {
      this.authenticationService.setToken(localStorage.getItem('currentUser'));
    }
    console.log("halo")
  }
  
}
