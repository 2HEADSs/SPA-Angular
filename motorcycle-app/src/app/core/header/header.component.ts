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



  constructor(private authService: AuthService, private router: Router) {
  }

  get isLoggedIn() {
    if(this.authService.user){
      return true
    }else {
      return false
    }
  }


  logout() {
    this.authService.logout()
    this.router.navigate(['/'])
  }


}
