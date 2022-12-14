import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { setSession } from 'src/app/shared/function/api';
import { passwordMissMatch } from 'src/app/shared/validators/repass-validator';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  pattern = '^[a-z0-9A-Z\.-]{3,}@[a-z]+\.[a-z]+$'
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(5)])


  registerFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
    'username': new FormControl('', [Validators.required, Validators.minLength(5)]),
    'password': this.passwordControl,
    'repass': new FormControl(null, [passwordMissMatch(this.passwordControl)]),
  })

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder) { }

  errors: string | undefined = undefined

  registerHandler(): void {
    const { email, username, password } = this.registerFormGroup.value
    const body = { email, username, password }
    // this.authService.user = body
    this.authService.register(body).subscribe({
      next: (userData) => {
        setSession(userData)
        this.authService.setLoginInfo(userData, true)
        this.router.navigate(['/bikes/catalog'])
      },
      error: (err) => {
        console.log(err.error.error);
        this.errors = err.error.error
      }
    })

  }
}
