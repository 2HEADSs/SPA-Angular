import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BikesService } from '../bikes.service';


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

  constructor(private formBuilder: FormBuilder, private bikesService: BikesService) { }

  createHandler(): void {
    const { brand, model, year, power, price, description, img } = this.createFormGroup.value
    const bike = { brand, model, year, power, price, description, img }

    console.log(bike);
    this.bikesService.createBike(bike).subscribe({
      next: (a) => console.log(a),
      error: (err) => {
        console.log(err.error.error);
        this.errors = err.error.error
      }

    })

  }

}
