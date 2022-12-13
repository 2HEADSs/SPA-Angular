import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasUser } from '../shared/routeGards/hasUser.gaurd';
import { IsGuest } from '../shared/routeGards/isGuest.guards';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
//todo guard
const routes: Routes = [
    {
        path: 'auth',
        children: [
            {
                path: 'register',
                component: RegisterComponent,

            },
            {
                path: 'login',
                component: LoginComponent,

            },
            {
                path: 'profile',
                component: ProfileComponent,


            },
            {
                path: 'logout',
                component: LogoutComponent,

            },
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
