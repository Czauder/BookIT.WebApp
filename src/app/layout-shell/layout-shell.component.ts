import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { AuthenticationService } from '../user-access/services/authentication.service';

@Component({
  selector: 'app-layout-shell',
  templateUrl: './layout-shell.component.html',
  styleUrls: ['./layout-shell.component.scss']
})
export class LayoutShellComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver, private authenticationsService: AuthenticationService) {}
  public isUser: boolean;

  public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );

  public ngOnInit(): void {
    if (this.authenticationsService.currentUserValue() !== null) {
      this.isUser = true;
    } else {
      this.isUser = false;
    }
  }
}
