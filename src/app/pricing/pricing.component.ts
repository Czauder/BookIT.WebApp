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
  public isSubscribed: false;

  constructor(private subscriptionsService: SubscriptionsService, private toastr: ToastrService) {}

  ngOnInit() {}

  public addYearSubscription(): void {
    this.subscriptionsService.addSubscriptions(SubscriptionType.Year).subscribe(response => {
      this.isSubscribed = response;
      console.log(this.isSubscribed);

      this.showToaster();
    });
  }

  public showToaster(): void {
    this.toastr.success('Congratulations! \uD83D\uDE00 You have access to Pro BookIT', '', {
      progressBar: true,
      positionClass: 'toast-bottom-full-width',
    });
  }
}
