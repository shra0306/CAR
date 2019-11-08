import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent {
  setPasswordModel :FormGroup;

  constructor(private set:FormBuilder) {
  
    this.setPasswordModel =this.set.group({
      enterpassword :[''],
      confirmpassword:['']
      
    })
    
   }
   onlClick(setpass){
    alert(JSON.stringify(setpass))
   }
  
}

