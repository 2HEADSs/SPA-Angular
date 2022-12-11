import { Component, OnInit } from '@angular/core';
import { IBike } from 'src/app/shared/interfaces/bikes';
import { BikesService } from '../bikes.service';

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.css']
})
export class BikesListComponent implements OnInit {


  bikesList: IBike[] | null = [];
  hasBikes: boolean = false

  constructor(private bikesSerice: BikesService) { }

  ngOnInit(): void {
    this.bikesSerice.loadAllBike().subscribe({
      next: (bikes) => {
        this.bikesList = bikes
        if (this.bikesList.length > 0) {
          this.hasBikes = true;
        }
      },
      error: (err) => {
        console.log(err);

      }
    })
  }



}
