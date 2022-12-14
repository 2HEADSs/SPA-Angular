import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BikesService } from '../bikes.service';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-create-bikes',
  templateUrl: './create-bikes.component.html',
  styleUrls: ['./create-bikes.component.css']
})
export class CreateBikesComponent {

  errors: string | undefined = undefined;
  URL_PATTERN = /^https?:\/\/.+/i

  createFormGroup: FormGroup = this.formBuilder.group({
    'brand': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'model': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'year': new FormControl('', [Validators.required, Validators.max(2022), Validators.min(1885)]),
    'power': new FormControl('', [Validators.required, Validators.min(0.5)]),
    'price': new FormControl('', [Validators.required, Validators.min(0.01)]),
    'description': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
    'img': new FormControl('', [Validators.required, Validators.pattern(this.URL_PATTERN)]),

  })

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private bikesService: BikesService, private router: Router) { }

  createHandler(): void {
    const { brand, model, year, power, price, description, img } = this.createFormGroup.value
    const bike = { brand, model, year, power, price, description, img }

    this.bikesService.createBike(bike).subscribe({
      next: (bike) => {
        if (!bike) { return }
        this.router.navigate(['/bikes/catalog'])
      },
      error: (err) => {
        console.log(err.error.error);
        this.authService.errorString = 'Sorry we can\'t add this bike!!!'
        this.router.navigate(['/'])
      }

    })

  }

}
