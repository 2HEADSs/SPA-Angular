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

  pattern = '^[a-z0-9A-Z\.-]{3,}@[a-z]+\.[a-z]+$'

  loginFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(5)])
  })

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder) { }


  loginSubmit(): void {
    const body = {
      email: this.loginFormGroup.value.email,
      password: this.loginFormGroup.value.password,
    }
    console.log(`${body}`);

    this.authService.user = body


  }
}
