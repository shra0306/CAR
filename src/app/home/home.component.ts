import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {
  }
  gotoPageUserSignup() {
    this.router.navigate(['/User_SignUp_Form']);
  }

  gotoPageServiceCenterSignup() {
    this.router.navigate(['/service-center-signup'])
  }

}