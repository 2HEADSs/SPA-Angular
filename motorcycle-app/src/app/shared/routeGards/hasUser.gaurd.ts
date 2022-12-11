import { Token } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
    providedIn: 'root'
})

export class HasUser implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate() {
        const token = localStorage.getItem('token')
        console.log(token + 'hasUser');


        if (token == null) {
            return true
            
        }
        this.router.navigate(['/']);
        return false;
    }
}