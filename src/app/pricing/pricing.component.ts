import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { SubscriptionsService } from './services/subscriptions.service';
import { SubscriptionType } from './subscription-type.enum';
import { AuthenticationService } from '../user-access/services/authentication.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  public responseMessage: string;
  public responseMessageError: string;
  public isUser: boolean;

  constructor(
    private subscriptionsService: SubscriptionsService,
    private authenticationsService: AuthenticationService,
    private toastr: ToastrService
  ) {}

  public ngOnInit(): void {
    if (this.authenticationsService.currentUserValue !== null) {
      this.isUser = true;
    } else {
      this.isUser = false;
      this.showSuccess();
    }
  }

  public addYearSubscription(): void {
    this.subscriptionsService.addSubscriptions(SubscriptionType.Year).subscribe(
      response => {
        if (response === null) {
          this.showToaster(false);
        }
        this.responseMessage = response.message;
        console.log(this.responseMessage);
        this.showToaster(true);
      },
      error => {
        console.log(this.responseMessageError);
        console.log(error);

        this.responseMessageError = error.error.Message;
        this.showToaster(false);
      }
    );
  }

  public showToaster(isSuccess: boolean): void {
    if (isSuccess) {
      this.toastr.success('Congratulations! Added Subscription 🥰🥰', '', {
        progressBar: true,
        positionClass: 'toast-bottom-full-width'
      });
      this.responseMessage = null;
    } else {
      if (this.responseMessageError === 'Customer already have active subscription.') {
        this.toastr.info('You already have subscriptions! 🤩🤩', '', {
          progressBar: true,
          positionClass: 'toast-bottom-full-width'
        });
        this.responseMessageError = null;
      }
    }
  }

  public showSuccess(): void {
    if (!this.isUser) {
      this.toastr.error('You must be login to get subscriptions! 😪', '', {
        progressBar: true,
        positionClass: 'toast-bottom-full-width',
        closeButton: true,
        timeOut: 5000
      });
    }
  }
}
