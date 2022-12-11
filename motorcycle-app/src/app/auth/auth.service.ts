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
  user: IUser | null  = null


  constructor(private http: HttpClient, private router: Router) { }

  //todo add my bike functionality



  getUser() {
    return this.http.get<IUser>(`${apiUrl}/auth/user`).pipe(tap((user) => {
      this.user = user
    }))
  }

  register(userData: {}) {
    return this.http.post<IUser>(`${apiUrl}/auth/register`, userData).pipe(tap((user) => {
      this.user = user
      localStorage.setItem('token', this.user.accessToken)
    }))
  }

  login(userData: {}) {
    return this.http.post<IUser>(`${apiUrl}/auth/login`, userData).pipe(tap((userData) => {
      this.user = userData
      localStorage.setItem('token', this.user.accessToken)
    }))
  }

  logout() {
    this.user = null;
    return localStorage.removeItem('token')
  }


  get isLoggedIn(): boolean { 

    return this.user !==null
    
  }

}
