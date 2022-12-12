import { Token } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
    providedIn: 'root'
})

export class HasUser implements CanActivate {
//todo one more check - rest request
    constructor(private authService: AuthService, private router: Router) { }

    canActivate() {
        const token = localStorage.getItem('token')
        if (token == null) {
            return true
            
        }
        this.router.navigate(['/']);
        return false;
    }
}