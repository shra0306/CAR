import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-service-center-login',
  templateUrl: './service-center-login.component.html',
  styleUrls: ['./service-center-login.component.css']
})
export class ServiceCenterLoginComponent {
  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotoForgotPassword(){
    this.router.navigate(['/forgot_password'])
  }}
