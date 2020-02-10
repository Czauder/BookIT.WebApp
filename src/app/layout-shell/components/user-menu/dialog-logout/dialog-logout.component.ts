import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/user-access/services/authentication.service';
import { User } from 'src/app/user-access/models/user.model';

@Component({
  selector: 'app-dialog-logout',
  templateUrl: './dialog-logout.component.html',
  styleUrls: ['./dialog-logout.component.scss']
})
export class DialogLogoutComponent implements OnInit {
  public token: string;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => (this.token = x));
    console.log(this.token);
    // narazie tutaj mam nulla bo nie mam tokena
  }

  ngOnInit() {}

  public logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['access/signin']);
  }
}
