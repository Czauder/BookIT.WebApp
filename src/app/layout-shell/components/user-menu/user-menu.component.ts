import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogLogoutComponent } from './dialog-logout/dialog-logout.component';
import { DialogAccountComponent } from './dialog-account/dialog-account.component';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  public openDialogLogout(): void {
    const dialogRef = this.dialog.open(DialogLogoutComponent, {
      width: '20%'
    });
  }

  public openDialogAccount(): void {
    const dialogRef = this.dialog.open(DialogAccountComponent, {
      width: '40%'
    });
  }
}
