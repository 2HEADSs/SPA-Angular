import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
//add user interface and set to user as

const apiUrl = environment.apiUrl


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any | null = null


  constructor(private http: HttpClient, private router: Router) { }

  //todo nav bar - login and logout

  register(userData: {}): Observable<any> {
    console.log(userData);
    
    return this.http.post<any>(`${apiUrl}/auth/register`,  userData )

  }
  

  get isLoggedIn() {
  return this.user !== null
}
}
