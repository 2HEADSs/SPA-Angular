import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {



  constructor(private router: Router, private authService: AuthService) {
    // this.authService.user = {
    //   username: 'Pavel',
    //   email: 'pavel@abv.bg'
    // };

    // this.router.navigate(['/'])
  }

  loginHandler(form: NgForm): void { 
    // console.log('loggedIn');
    // this.authService.user = {
    //   username: 'Pavel',
    //   email: 'pavel@abv.bg'
    // };
  }

}
