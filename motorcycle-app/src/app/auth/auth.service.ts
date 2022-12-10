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

  user: IUser | null | string = null


  constructor(private http: HttpClient, private router: Router) { }

  //todo add my bike functionality
  getUser() {
    return this.http.get<IUser>(`${apiUrl}/auth/user`).pipe(tap((user) => {
      this.user = user
    }))
  }

  register(userData: {}) {
    console.log(userData);
    return this.http.post<IUser>(`${apiUrl}/auth/register`, userData).pipe(tap((user) => {
     this.user = user
      localStorage.setItem('token', this.user.accessToken)
    }))
  }

  login(userData: {}) {
    return this.http.post<IUser>(`${apiUrl}/auth/login`, userData).pipe(tap((user) => {
      this.user = user
      localStorage.setItem('token', this.user.accessToken)

    }))
  }

  logout() {
    this.user = null;
    localStorage.removeItem('token')
    return
  }

  get isLoggedIn() {
    if (this.user) {
      return this.user
    }
    return null
  }
}
