import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces/user';
//add user interface and set to user as

const apiUrl = environment.apiUrl


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any | null = null


  constructor(private http: HttpClient, private router: Router) { }

  //todo nav bar - login and logout

  register(userData: {}): Observable<IUser> {
    console.log(userData);

    return this.http.post<IUser>(`${apiUrl}/auth/register`, userData).pipe(tap((user) => {
      this.user = user
      localStorage.setItem('token', this.user.accessToken)
    }))
  }

  login(userData: {}): Observable<IUser> {

    return this.http.post<IUser>(`${apiUrl}/auth/login`, userData).pipe(tap((user) => {
      this.user = user
      localStorage.setItem('token', this.user.accessToken)
    }))
  }

  logout() {
    this.user = null;
    return localStorage.removeItem('token')
  }

  get isLoggedIn() {
    return this.user !== null
  }
}
