import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BokkingForWashComponent } from './bokking-for-wash.component';
import { BookingRoutingModule } from './booking_routing_module';

@NgModule({
  imports: [
    CommonModule,
    BookingRoutingModule
  ],
  declarations: [BokkingForWashComponent]
})
export class BookingModule { }