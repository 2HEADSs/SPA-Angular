import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
    providedIn: 'root'
})

export class IsGuest implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }
    canContoniue(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        throw new Error("Method not implemented.");
    }

    canActivate() {

        if (!this.authService.isLogged) {
            return true
        }
        this.authService.errorString = 'You are allready logged in!!!'
        this.router.navigate(['/'])
        return false
    }
}