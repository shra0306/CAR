import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BokkingForWashComponent } from './bokking-for-wash.component';


const routes: Routes = [
  {
    path: '',
    component: BokkingForWashComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }