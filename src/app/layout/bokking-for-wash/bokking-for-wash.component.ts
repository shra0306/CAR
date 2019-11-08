import { Component} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-bokking-for-wash',
  templateUrl: './bokking-for-wash.component.html',
  styleUrls: ['./bokking-for-wash.component.css']
})
export class BokkingForWashComponent{
  bookwashModel :FormGroup;

  constructor(private book:FormBuilder) {
  
    this.bookwashModel =this.book.group({
      vihiclename :[''],
      vehicletype:[''],
      contactPersonName :[''], 
      contactdetails :[''],
      servicetype:[''],
      requireDescription :[''],
      needpickup:[''],
      arealocation:[''],
      pickupdate:[''],
      budprice:[''],
    })
    
   }
   onlClick(books){
    alert(JSON.stringify(books))
   }
  
}
