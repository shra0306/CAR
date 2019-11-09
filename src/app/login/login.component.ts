import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel :FormGroup;
  
  constructor(private router: Router) { 
    
  }
 
  gotoPageHome() {
    this.router.navigate(['/home']);
  }
  ngOnInit() {
  }

}
