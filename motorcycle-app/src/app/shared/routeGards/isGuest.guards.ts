import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
    providedIn: 'root'
})

export class IsGuest implements CanActivate {
//todo one more check - rest request
    constructor(private authService: AuthService, private router: Router) { }

    canActivate() {
        const token = localStorage.getItem('token')

        if (token == null) {
            this.router.navigate(['/auth/login']);
            return false;
            
        }
        return true
    }
}
