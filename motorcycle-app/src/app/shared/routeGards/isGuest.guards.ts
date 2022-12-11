import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
    providedIn: 'root'
})

export class IsGuest implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate() {
        const token = localStorage.getItem('token')
        console.log(token + 'isguest');
        


        if (token ==null) {
            this.router.navigate(['/auth/login']);
            return false;
            
        }
        return true
    }
}
