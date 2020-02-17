import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/user-access/services/authentication.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  public isUser: boolean;

  constructor(private authenticationsService: AuthenticationService) {}

  public ngOnInit(): void {
    if (this.authenticationsService.currentUserValue() !== null) {
      this.isUser = true;
    } else {
      this.isUser = false;
    }
  }
}
