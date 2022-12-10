// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Observable, Subject, tap } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { IUser } from '../shared/interfaces/user';
// //add user interface and set to user as

// const apiUrl = environment.apiUrl


// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   user: IUser | null | string = null

//   private isAuthenticated!: boolean


//   private _refreshInfo = new Subject<IUser>()

//   constructor(private http: HttpClient, private router: Router) { }

//   //todo add my bike functionality

//   isLoggedIn() {
//     return this.isAuthenticated
//   }

//   get refreshInfo() {
//     return this._refreshInfo.asObservable()
//   }

//   getUser() {
//     return this.http.get<IUser>(`${apiUrl}/auth/user`).pipe(tap((user) => {
//       console.log(user);

//       this.user = user
//     }))
//   }

//   register(userData: {}) {
//     return this.http.post<IUser>(`${apiUrl}/auth/register`, userData).pipe(tap((user) => {
//       this._refreshInfo.next(user)
//       this.user = user
//       localStorage.setItem('token', this.user.accessToken)
//       this.isAuthenticated = true;
//     }))
//   }

//   login(userData: {}) {
//     return this.http.post<IUser>(`${apiUrl}/auth/login`, userData).pipe(tap((userData) => {
//       this._refreshInfo.next(userData)
//       this.user = userData
//       localStorage.setItem('token', this.user.accessToken)
//       this.isAuthenticated = true;


//     }))
//   }

//   logout() {
//     this.user = null;
//     this.isAuthenticated = false;
//     return localStorage.removeItem('token')

//   }

// }
