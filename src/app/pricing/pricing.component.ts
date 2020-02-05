import { Component, OnInit } from '@angular/core';

import { SubscriptionsService } from './services/subscriptions.service';
import { SubscriptionType } from './subscription-type.enum';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  constructor(private subscriptionsService: SubscriptionsService) {}

  ngOnInit() {}

  public addYearSubscription() {
    this.subscriptionsService.addSubscriptions(SubscriptionType.Year).subscribe(response => console.log(response));
  }
}
