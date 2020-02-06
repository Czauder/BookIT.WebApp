import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing.component';
import { DialogPricingComponent } from './dialog-pricing/dialog-pricing.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [PricingComponent, DialogPricingComponent],
  imports: [CommonModule, ToastrModule.forRoot()],
  providers: [ToastrService]
})
export class PricingModule {}
