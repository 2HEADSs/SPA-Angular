import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces/user';

const apiUrl = environment.apiUrl


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: IUser | null = null


  constructor(private http: HttpClient, private router: Router) { }

  //todo add my bike functionality



  getUser() {
    return this.http.get<IUser>(`${apiUrl}/auth/user`).pipe(tap((userData) => {
      console.log(userData + 'getUser');

      this.user = userData
    }))
  }

  register(userData: {}) {
    return this.http.post<IUser>(`${apiUrl}/auth/register`, userData).pipe(tap((userData) => {
      console.log(userData);

      localStorage.setItem('token', userData.accessToken)
      console.log(userData.accessToken);

      this.user = userData
    }))
  }

  login(userData: {}) {
    return this.http.post<IUser>(`${apiUrl}/auth/login`, userData).pipe(tap((userData) => {
      localStorage.setItem('token', userData.accessToken)
      this.user = userData
    }))
  }

  logout() {
    this.user = null;
    return localStorage.removeItem('token')
  }


  get isLoggedIn(): boolean {
    if (this.user) {
      return true
    } else {
      return false
    }
  }

}
