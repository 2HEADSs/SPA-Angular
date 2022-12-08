import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  pattern = '^[a-z0-9A-Z\.-]{3,}@[a-z]+\.[a-z]+$'

    registerFormGroup: FormGroup = this.formBuilder.group({
      'email': new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
      'username': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'password': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'repass': new FormControl(),
    })

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder) { }

  registerHandler(): void {
    console.log('register');

  }
}
