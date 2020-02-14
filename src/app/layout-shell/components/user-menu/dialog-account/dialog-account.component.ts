import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/user-access/services/authentication.service';
import { JwtDecoderService } from 'src/app/user-access/services/jwt-decoder.service';
import { User } from 'src/app/user-access/models/user.model';

@Component({
  selector: 'app-dialog-account',
  templateUrl: './dialog-account.component.html',
  styleUrls: ['./dialog-account.component.scss']
})
export class DialogAccountComponent implements OnInit {
  public user: User;


  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue();
    console.log(this.user);
  }
}
