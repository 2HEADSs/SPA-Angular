import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
    providedIn: 'root'
})

export class IsGuest implements CanActivate {
    //todo one more check - rest request
    constructor(private authService: AuthService, private router: Router, private state: RouterStateSnapshot) { }

    canContoniue(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.checkIfGuest(state.url) || this.router.createUrlTree(["/"]);
    }

    checkIfGuest(url: string):boolean {
        //if is notlogged in and path is logout => return
        if (url === '/auth/logout' && !this.authService.isLogged) {
            this.authService.errorString = 'You must login first!!'
            this.router.navigate(['/auth/login']);
            return false
        }
        //if path is logout and is logged in
        if (url === '/auth/logout' && this.authService.isLogged) {
            this.authService.errorString = null;
            return true
        }
        // if is logged in
        if (this.authService.isLogged) {
            this.authService.errorString = null
            return true
        }

        if (!this.authService.isLogged) {
            this.authService.errorString = 'You must login first!!'
            this.router.navigate(['/auth/login']);
            return false
        }
        return false
    }
}

