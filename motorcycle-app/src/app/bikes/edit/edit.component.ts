import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IBike } from 'src/app/shared/interfaces/bikes';
import { BikesService } from '../bikes.service';
let id = ''

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  singleBike: IBike | null = null
  URL_PATTERN = /^https?:\/\/.+/i
  id: string = ''

  editFormGroup: FormGroup = this.formBuilder.group({
    'brand': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'model': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'year': new FormControl('', [Validators.required, Validators.max(2022), Validators.min(1885)]),
    'power': new FormControl('', [Validators.required, Validators.min(0.5)]),
    'price': new FormControl('', [Validators.required, Validators.min(0.01)]),
    'description': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
    'img': new FormControl('', [Validators.required, Validators.pattern(this.URL_PATTERN)]),

  })

  constructor(private bikesService: BikesService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']

    this.bikesService.loadOneBike(this.id).subscribe({
      next: (bike) => {
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
    

    this.bikesService.updateBike(body, this.id).subscribe({
      next: (bike) => {
        if (!bike) { return }
        this.router.navigate([`/bikes/details/${this.id}`])
        console.log(bike);
        
      },
      error: (err) => {
        console.log(err);
      }

    })

  }


}
