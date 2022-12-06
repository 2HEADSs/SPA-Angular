import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class AppInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //add token - erik mistakes(if-else)
        return next.handle(req)
    }
}

export const appInterceptorProvider :Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
}