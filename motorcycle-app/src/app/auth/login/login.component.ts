import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {

  loginFormGroup: FormGroup = this.formBuilder.group({
    'email' : new FormControl('',[Validators.required, ]),
    'password': new FormControl('',[Validators.required, Validators.minLength(4)])
  })

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder) { }


  loginHandler(): void {


    this.authService.user = {
      username: 'Pavel',
      email: 'pavel@abv.bg'
    };
  }

}
