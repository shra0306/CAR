import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
constructor(private router:Router) { }

gotopageChangePassword(){
  this.router.navigate(['user_change_pass'])
}
}
