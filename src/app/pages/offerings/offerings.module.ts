import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferingsRoutingModule } from './offerings-routing.module';
import { OfferingsComponent } from './offerings.component';
import { OfferingCardComponent } from './offering-card/offering-card.component';

@NgModule({
  declarations: [OfferingsComponent, OfferingCardComponent],
  imports: [
    CommonModule,
    OfferingsRoutingModule
  ]
})
export class OfferingsModule { }
