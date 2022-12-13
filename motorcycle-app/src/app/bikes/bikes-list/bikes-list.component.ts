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
        console.log(bikes);

        this.bikesList = bikes
        if (this.bikesList.length > 0) {

          this.hasBikes = true;
        }
      },
      error: (err) => {
        this.authService.errorString = err.name
        this.router.navigate(['/'])

      }
    })
  }



}
