import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IBike } from 'src/app/shared/interfaces/bikes';
import { BikesService } from '../bikes.service';

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.css']
})
export class BikesListComponent implements OnInit {


  bikesList: IBike[] | null = null;
  hasBikes: boolean = true

  constructor(private bikesSerice: BikesService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.bikesSerice.loadAllBike().subscribe({
      next: (bikes) => {
        this.bikesList = bikes
        if (this.bikesList.length > 0) {

          this.hasBikes = true;
        } else {
          this.hasBikes = false;

        }
      },
      error: (err) => {
        this.authService.errorString = 'Sorry we can\'t load bikes from DataBase'
        this.router.navigate(['/'])

      }
    })
  }



}
