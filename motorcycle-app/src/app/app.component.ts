import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'motorcycle-app';

  constructor(private http: HttpClient, private userService: AuthService) {
    if (localStorage.getItem('token')) {
    userService.getUser()

    } else{
      console.log('you are not logged in');
      
    }
  }
}
