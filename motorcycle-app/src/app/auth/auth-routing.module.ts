import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestActivate } from '../shared/routeGards/hasUser.gaurd';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: 'auth',
        children: [
            {
                path: 'register',
                component: RegisterComponent,
                canActivate: [GuestActivate]
            },
            {
                path: 'login',
                component: LoginComponent,
                canActivate: [GuestActivate]
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'logout',
                component: LogoutComponent
            },
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
