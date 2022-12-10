import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user: IUser | null = null

  constructor(private authService: AuthService, private router: Router) {
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }


  logout() {
    this.authService.logout()
    this.router.navigate(['/'])
  }

  get userData() {
    return this.authService.user
  }

}
