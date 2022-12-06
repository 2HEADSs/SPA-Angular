import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  get isLoggedIn() {
    console.log(this.authService.isLoggedIn);
    
    return this.authService.isLoggedIn
  }

  get user() {
    console.log(this.authService.user);
    
    return this.authService.user
  }

  constructor(private authService: AuthService) {
  }



}
