import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
    providedIn: 'root'
})

export class AuthActivate implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate() {

        if(!!this.authService.user) {
            this.router.navigate(['/auth/login']);
            return false
        }
        return true;
    }
}