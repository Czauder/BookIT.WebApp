import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/user-access/services/authentication.service';
import { User } from 'src/app/user-access/models/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dialog-logout',
  templateUrl: './dialog-logout.component.html',
  styleUrls: ['./dialog-logout.component.scss']
})
export class DialogLogoutComponent implements OnInit {
  public token: string;

  constructor(private router: Router, private authenticationService: AuthenticationService,
  private toastr: ToastrService) {}

  ngOnInit() {}

  public logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['access/signin']);
    this.showToaster();
  }

  public showToaster(): void {
    this.toastr.success(`Successfully logout! Bye bye! 👋👋👋 `, '', {
      progressBar: true,
      positionClass: 'toast-bottom-full-width'
    });
  }
}
