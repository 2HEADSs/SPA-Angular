import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userEmails = new FormGroup({
    primaryEmail: new FormControl('',[
    Validators.required,
    
  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    secondaryEmail: new FormControl('',[
    Validators.required,
    
  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  });  


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
