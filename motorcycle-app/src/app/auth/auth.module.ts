import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthRoutingModule } from './auth-routing.module';
import { BikesRoutingModule } from '../bikes/bikes-routing.module';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    BikesRoutingModule
  ]
})
export class AuthModule { }
