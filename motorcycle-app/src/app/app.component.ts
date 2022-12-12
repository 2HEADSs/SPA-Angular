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

  constructor(private http: HttpClient, private authService: AuthService) {
    console.log('app-component');
    
    if (localStorage.getItem('token')) {
      console.log(localStorage.getItem('token') + 'app-component');
      
      authService.getUser().subscribe((a)=> {
        console.log(a+'app-component');
        
      });
    }
  }
}
