import { Component, OnInit } from '@angular/core';
import { BikesService } from '../bikes.service';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent implements OnInit {

  singleBike: any | null = null
  

  constructor(private bikesSerice: BikesService) { }
  ngOnInit(): void {
    this.bikesSerice.loadOneBike().subscribe({
      next: (bike) => {
        console.log(bike);

        this.singleBike = bike
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

}
