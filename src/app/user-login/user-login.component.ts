import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  data: FormGroup;

  constructor(private router: Router) {
    this.data = new FormGroup({
      mobileN: new FormControl(''),
      password: new FormControl('')
    });
  }

  login() {
    if (this.data.value.mobileN === 'Appa' && this.data.value.password === 'password') {
      this.router.navigate(['/home']);

    } else {
      alert('invalid username & password');
    }

  }
  onClick(a){
    alert(JSON.stringify(a))
}
}
