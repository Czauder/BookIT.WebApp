import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogLogoutComponent } from './dialog-logout/dialog-logout.component';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogLogoutComponent, {
      width: '20%'
    });
  }
}
