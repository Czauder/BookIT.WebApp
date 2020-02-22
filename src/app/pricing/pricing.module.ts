import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { DialogPricingComponent } from './dialog-pricing/dialog-pricing.component';
import { PricingComponent } from './pricing.component';

@NgModule({
  declarations: [PricingComponent, DialogPricingComponent],
  imports: [CommonModule, ToastrModule.forRoot()],
  providers: [ToastrService]
})
export class PricingModule {}
