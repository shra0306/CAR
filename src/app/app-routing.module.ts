import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserSignupFormComponent } from './user-signup-form/user-signup-form.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BokkingForWashComponent } from './layout/bokking-for-wash/bokking-for-wash.component';
import { EditProfileComponent } from './layout/edit-profile/edit-profile.component';
import { ServicecentersignupComponent } from './service-center-signup/service-center-signup.component';
import { ServiceCenterLoginComponent } from './service-center-login/service-center-login.component';
import { LayoutComponent } from './layout/layout.component';
import { ServiceEditProfileComponent } from './service-edit-profile/service-edit-profile.component';
import { UserChangePasswordComponent } from './user-change-password/user-change-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { WashComponent } from './Booking_for_maintenance/wash/wash.component';
import { ConfirmedOrdersComponent } from './confirmed-orders/confirmed-orders.component';
import { WalletDetailsComponent } from './wallet-details/wallet-details.component';
import { OneTimePasswordComponent } from './one-time-password/one-time-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ServiceOneTimePasswordComponent } from './service-one-time-password/service-one-time-password.component';
import { MasterComponent } from './master/master.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'Master', component: MasterComponent },
  { path: 'User_SignUp_Form', component: UserSignupFormComponent },
  { path: 'one_time_password', component:  OneTimePasswordComponent},
  { path: 'forgot_password', component:  ForgotPasswordComponent},
  { path: 'service-center-signup', component: ServicecentersignupComponent },
  { path: 'service_one_time_password', component: ServiceOneTimePasswordComponent },

  { path: 'Set_password_form', component: SetPasswordComponent },
  { path: 'User_loginForm', component: UserLoginComponent },
  { path: 'Booking_for_wash', component: BokkingForWashComponent },
  { path: 'Edit_profile', component: EditProfileComponent },
  { path: 'user_change_pass', component: UserChangePasswordComponent },
  { path: 'service_center_login', component: ServiceCenterLoginComponent },
  { path: 'booking_for_maintenance_wash', component: WashComponent },
  { path: 'service_edit_profile', component: ServiceEditProfileComponent },
  { path: 'change_password', component: ChangePasswordComponent },
  { path: 'confirmed_orders', component: ConfirmedOrdersComponent},
  { path: 'wallet_details', component: WalletDetailsComponent},
  { path: 'layout', component: LayoutComponent }
  // {path : '',redirectTo:'/Home',pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
