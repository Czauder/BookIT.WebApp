import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
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

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );
  
  public ngOnInit(): void {
    if (this.authenticationsService.currentUserValue !== null) {
      console.log('zalgowany');
      this.isUser = true;
    } else {
      console.log('nie zalo');
      this.isUser = false;
    }
  }
}
