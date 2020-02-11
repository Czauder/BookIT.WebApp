import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { SubscriptionsService } from './services/subscriptions.service';
import { SubscriptionType } from './subscription-type.enum';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  public responseMessage: string;
  public responseMessageError: string;

  constructor(private subscriptionsService: SubscriptionsService, private toastr: ToastrService) {}

  ngOnInit() {}

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
        this.responseMessageError = error.error.Message;
        console.log(this.responseMessageError);
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
}
