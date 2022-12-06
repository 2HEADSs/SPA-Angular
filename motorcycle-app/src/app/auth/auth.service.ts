import { Injectable } from '@angular/core';
//add user interface and set to user as
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any | null = null

  get isLoggedIn() {
    return this.user !== null
  }

  constructor() { }
}
