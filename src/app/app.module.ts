import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserSignupFormComponent } from './user-signup-form/user-signup-form.component';
import { ServicecentersignupComponent } from './service-center-signup/service-center-signup.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { EditProfileComponent } from './layout/edit-profile/edit-profile.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ServiceCenterLoginComponent } from './service-center-login/service-center-login.component';
import { LayoutComponent } from './layout/layout.component';
import { ServiceEditProfileComponent } from './service-edit-profile/service-edit-profile.component';
import { UserChangePasswordComponent } from './user-change-password/user-change-password.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ConfirmedOrdersComponent } from './confirmed-orders/confirmed-orders.component';
import { WalletDetailsComponent } from './wallet-details/wallet-details.component';
import { WashComponent } from './Booking_for_maintenance/wash/wash.component';
import { MasterComponent } from './master/master.component';
import { OneTimePasswordComponent } from './one-time-password/one-time-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ServiceOneTimePasswordComponent } from './service-one-time-password/service-one-time-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BokkingForWashComponent } from './layout/bokking-for-wash/bokking-for-wash.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserSignupFormComponent,
    ServicecentersignupComponent,
    SetPasswordComponent,
    BokkingForWashComponent,
    EditProfileComponent,
    UserLoginComponent,
    ServiceCenterLoginComponent,
    LayoutComponent,
    ServiceEditProfileComponent,
    UserChangePasswordComponent,
    LoginComponent,
    ChangePasswordComponent,
    ConfirmedOrdersComponent,
    WalletDetailsComponent,
    WashComponent,
    MasterComponent,
    OneTimePasswordComponent,
    ForgotPasswordComponent,
    ServiceOneTimePasswordComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'login',component:LoginComponent},
      {path: 'Master',component:MasterComponent},
      { path: 'Home', component: HomeComponent },
      { path: 'User_SignUp_Form', component: UserSignupFormComponent },
      { path: 'one_time_password', component: OneTimePasswordComponent },
      { path: 'forgot_password', component: ForgotPasswordComponent },
      { path: 'service-center-signup', component: ServicecentersignupComponent },
      { path: 'service_one_time_password', component: ServiceOneTimePasswordComponent },
      { path: 'Set_password_form', component: SetPasswordComponent },
      { path: 'User_loginForm', component: UserLoginComponent },
      { path: 'Bokking_for_wash', component: BokkingForWashComponent },
      { path: 'Edit_profile', component: EditProfileComponent },
      { path: 'user_change_pass', component: UserChangePasswordComponent },
      { path: 'service_center_login', component: ServiceCenterLoginComponent },
      { path: 'service_edit_profile', component: ServiceEditProfileComponent },
      { path: 'layout', component: LayoutComponent },
      { path: '**', component: PageNotFoundComponent },

      // {path : '',redirectTo:'/Home',pathMatch:'full'},
    ])



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
