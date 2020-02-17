import { Component, OnInit } from '@angular/core';
import { SubscriptionsService } from 'src/app/pricing/services/subscriptions.service';
import { User } from 'src/app/user-access/models/user.model';
import { AuthenticationService } from 'src/app/user-access/services/authentication.service';

@Component({
  selector: 'app-dialog-account',
  templateUrl: './dialog-account.component.html',
  styleUrls: ['./dialog-account.component.scss']
})
export class DialogAccountComponent implements OnInit {
  public user: User;
  public subscriptionType = 'none';
  private subscriptionEnd: Date;

  constructor(
    private authenticationService: AuthenticationService,
    private subscriptionsService: SubscriptionsService
  ) {}

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue();
    this.subscriptionsService.getSubscriptionByCustomerId().subscribe(sub => {
      if (sub) {
        this.subscriptionType = sub.subscriptionType;
        this.subscriptionEnd = sub.subscriptionEnd;
      }
    });
  }
}
