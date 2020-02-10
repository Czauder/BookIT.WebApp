import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  offline$ = fromEvent(window, 'offline');
  online$ = fromEvent(window, 'online');

  public constructor(private toastr: ToastrService) {}
  ngOnInit(): void {
    this.offline$.subscribe(_ =>
      this.toastr.error(`We are offline`, '', {
        progressBar: true,
        positionClass: 'toast-bottom-full-width'
      })
    );
    this.online$.subscribe(_ =>
      this.toastr.info(`We are online`, '', {
        progressBar: true,
        positionClass: 'toast-bottom-full-width'
      })
    );
  }
  title = 'bookIT';

}
