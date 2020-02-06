import { Component, OnInit } from '@angular/core';

import { SubscriptionsService } from './services/subscriptions.service';
import { SubscriptionType } from './subscription-type.enum';
import { MatDialog } from '@angular/material/dialog';
import { DialogPricingComponent } from './dialog-pricing/dialog-pricing.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  public isSubscribed: false;

  constructor(private subscriptionsService: SubscriptionsService, public dialog: MatDialog, private toastr: ToastrService) {}

  ngOnInit() {}

  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogPricingComponent, {
      width: '60%'
    });
  }

  public addYearSubscription(): void {
    this.subscriptionsService
      .addSubscriptions(SubscriptionType.Year)
      .subscribe(response => {
        this.isSubscribed = response;
        console.log(this.isSubscribed);
      });
    this.openDialog();
  }

  public showSuccess(): void {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
