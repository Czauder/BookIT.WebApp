import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthenticationService } from 'src/app/user-access/services/authentication.service';

import { DialogAccountComponent } from './dialog-account/dialog-account.component';
import { DialogLogoutComponent } from './dialog-logout/dialog-logout.component';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  public isUser: boolean;
  constructor(public dialog: MatDialog, private authenticationsService: AuthenticationService) {}

  public ngOnInit(): void {
    if (this.authenticationsService.currentUserValue() !== null) {
      this.isUser = true;
    } else {
      this.isUser = false;
    }
  }

  public openDialogLogout(): void {
    this.dialog.open(DialogLogoutComponent, {
      width: '20%'
    });
  }

  public openDialogAccount(): void {
    this.dialog.open(DialogAccountComponent, {
      width: '30%'
    });
  }
}
