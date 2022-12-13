import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { getSession } from './shared/function/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'motorcycle-app';

  constructor(private http: HttpClient, private authService: AuthService) {
    console.log('app-component');

    if (!getSession()) {
      this.authService.setLoginInfo(null, false)
      return
    }
    this.authService.setLoginInfo(getSession(), true)

  }
}