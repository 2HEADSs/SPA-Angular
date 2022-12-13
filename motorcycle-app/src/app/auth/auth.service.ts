import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getSession, logoutSession, } from '../shared/function/api';
import { IUser } from '../shared/interfaces/user';

const apiUrl = environment.apiUrl


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user!: IUser | null;
  isLogged: boolean = false
  errorString: string | null = null

  constructor(private http: HttpClient, private router: Router) { }

  //todo add my bike functionality



  getUser() {
    return this.http.get<IUser>(`${apiUrl}/auth/user`,).pipe(tap((userData) => {
      console.log(userData + 'getUser');

    }))
  }

  // /auth/register
  register(userData: {}) {
    return this.http.post<IUser>(`${apiUrl}/auth/register`, userData).pipe(tap((response) => {
      if (!response._id) { return }
    }))
  }

  login(userData: {}) {
    return this.http.post<IUser>(`${apiUrl}/auth/login`, userData).pipe(tap((response) => {
      if (!response._id) { return }
    }))
  }

  logout() {
    if (!getSession()) { return }
    logoutSession()
    this.setLoginInfo(null, false)
    this.router.navigate(['/'])
  }

  setLoginInfo(user: IUser | null, status: boolean) {
    return (
      this.user = user,
      this.isLogged = status
    );
  }


}
