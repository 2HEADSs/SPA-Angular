import { Token } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
    providedIn: 'root'
})

export class HasUser implements CanActivate {
    //todo one more check - rest request
    constructor(private authService: AuthService, private router: Router, private state: RouterStateSnapshot) { }


    canContoniue(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.checkIfAuth() || this.router.createUrlTree(["/"]);
    }

    checkIfAuth(): boolean {
        //     if (!this.authService.isLogged) {
        //         this.authService.errorString = null
        //         return true
        //     }

        //     this.authService.errorString = 'You are already logged in!'
        //     return false;
        // }
        return true
    }
}
