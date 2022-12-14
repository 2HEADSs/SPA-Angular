import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasUser } from '../shared/guards/hasUser.guard';
import { IsGuest } from '../shared/guards/isGuest.guard';
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
                canActivate:[IsGuest]
            },
            {
                path: 'login',
                component: LoginComponent,
                canActivate:[IsGuest]

            },
            {
                path: 'profile',
                component: ProfileComponent,
                canActivate:[HasUser]
            },
            {
                path: 'logout',
                component: LogoutComponent,
                canActivate:[HasUser]


            },
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
