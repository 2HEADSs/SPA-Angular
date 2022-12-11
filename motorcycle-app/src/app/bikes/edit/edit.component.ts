import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BikesService } from '../bikes.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  singleBike: any | null = null
  URL_PATTERN = /^https?:\/\/.+/i

  editFormGroup: FormGroup = this.formBuilder.group({
    'brand': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'model': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'year': new FormControl('', [Validators.required, Validators.max(2022), Validators.min(1885)]),
    'power': new FormControl('', [Validators.required, Validators.min(0.5)]),
    'price': new FormControl('', [Validators.required, Validators.min(0.01)]),
    'description': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
    'img': new FormControl('', [Validators.required, Validators.pattern(this.URL_PATTERN)]),

  })

  constructor(private bikesService: BikesService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id']

    this.bikesService.loadOneBike(id).subscribe({
      next: (bike) => {
        console.log(bike);

        this.singleBike = bike
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

  createHandler(): void {
    const { brand, model, year, power, price, description, img } = this.editFormGroup.value
    const body = { brand, model, year, power, price, description, img }

    console.log(body);

    this.bikesService.updateBike(body).subscribe({
      next: (a) => console.log(a),
      error: (err) => {
        console.log(err.error.error);
      }

    })

  }


}
