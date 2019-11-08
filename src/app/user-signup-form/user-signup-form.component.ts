import { Component} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-signup-form',
  templateUrl: './user-signup-form.component.html',
  styleUrls: ['./user-signup-form.component.css']
})
export class UserSignupFormComponent  {
constructor(private router:Router) {
 }
 
gotoPageSetPassword(){
    this.router.navigate(['/Set_password_form'])
  }
  gotoPageGenrateOtp(){
    this.router.navigate(['/one_time_password'])
  }
}
