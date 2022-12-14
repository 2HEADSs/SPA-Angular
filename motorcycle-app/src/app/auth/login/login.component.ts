import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { setSession } from 'src/app/shared/function/api';
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

  errors: string | undefined = undefined




  loginSubmit(): void {
    const { email, password } = this.loginFormGroup.value

    this.authService.login({ email, password,}).subscribe({
      next: (userData) => {
        setSession(userData)
        this.authService.setLoginInfo(userData,true)
        this.router.navigate(['/'])
      },
      error: (err) => { 
        console.log(err.error.error);
        // this.authService.errorString = 'Sorry we have problem with server!!!'
        this.errors = err.error.error
        // this.router.navigate(['/'])
      }
    })

  }
}


