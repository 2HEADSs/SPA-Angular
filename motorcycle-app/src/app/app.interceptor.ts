import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class AppInterceptor implements HttpInterceptor {
    token: string | null  = localStorage.getItem('token')
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.token){
            console.log(this.token + 'token - interceptor');
            
            return next.handle(req.clone({ setHeaders: { 'X-Authorization': this.token}}));
        }else{
            return next.handle(req.clone())
        }
    }

}

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
}