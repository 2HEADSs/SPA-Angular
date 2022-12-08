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
  // userEmails = new FormGroup({
  //   primaryEmail: new FormControl('',[
  //   Validators.required,

  // Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  //   secondaryEmail: new FormControl('',[
  //   Validators.required,

  // Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  // });  


  constructor(private router: Router, private authService: AuthService) {

  }

  loginHandler(form: NgForm): void {
    console.log(form.valid)
    console.log(form.value);
    
    this.authService.user = {
      username: 'Pavel',
      email: 'pavel@abv.bg'
    };
  }

}
