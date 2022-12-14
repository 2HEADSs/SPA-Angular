import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IBike } from 'src/app/shared/interfaces/bikes';
import { BikesService } from '../bikes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  bikesList: IBike[] | null = null;
  hasBikes: boolean = true
  hasSearch: boolean = false
  searchList: IBike[] = []
  hasSearchList: Boolean = false
  hasloadingSearch: Boolean = false


  searchFormGroup: FormGroup = this.formBuilder.group({
    'search': new FormControl('')
  })

  constructor(private bikesSerice: BikesService, private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  searchHandler() {
    const { search } = this.searchFormGroup.value
    const string = this.searchFormGroup.value
    this.hasSearch = true
    this.hasloadingSearch = true
    this.searchList = []
    if (string.search == '') {
      this.hasSearch = false
    } else {
      // this.bikesList?.map(x => x.model.includes((string.search.toLowerCase())))

      console.log(string.search);
      this.bikesList?.map((x) => {
        if (x.brand.toLowerCase().includes(string.search.toLowerCase())) {
          this.searchList.push(x)
        }
      })
      this.hasloadingSearch = false
      if (this.searchList.length > 0) {
        this.hasSearchList = true
      }else {
        this.hasSearchList = false
        this.hasloadingSearch = false

      }
      this.hasSearch = true
    }

  }

  ngOnInit(): void {
    this.hasSearch = false
    this.bikesSerice.loadAllBike().subscribe({
      next: (bikes) => {

        this.bikesList = bikes
        if (this.bikesList.length > 0) {
          this.hasBikes = true;
        }
      },
      error: (err) => {
        console.log(err.message);
        
        this.authService.errorString = 'Sorry we have problem with server!!!'

        this.router.navigate(['/'])

      }
    })
  }


}
