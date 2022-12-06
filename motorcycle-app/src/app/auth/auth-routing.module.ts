import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: 'auth/register',
        component: RegisterComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'auth/profile',
        component: ProfileComponent
    },
    {
        path: 'auth/logout',
        component: LogoutComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
