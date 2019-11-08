import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one-time-password',
  templateUrl: './one-time-password.component.html',
  styleUrls: ['./one-time-password.component.css']
})
export class OneTimePasswordComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotoForgotPassword(){
    this.router.navigate(['/forgot_password'])
  }
}
