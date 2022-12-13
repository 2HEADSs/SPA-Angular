import { Component, OnInit } from '@angular/core';
import { IBike } from 'src/app/shared/interfaces/bikes';
import { BikesService } from '../bikes.service';

@Component({
  selector: 'app-my-bikes',
  templateUrl: './my-bikes.component.html',
  styleUrls: ['./my-bikes.component.css']
})
export class MyBikesComponent {


  bikesList: IBike[] | null = null;
  hasBikes: boolean = false

  constructor(private bikesSerice: BikesService) { }

  ngOnInit(): void {
    this.bikesSerice.loadMyBikes().subscribe({
      next: (bikes) => {
        if (!bikes) { return }
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
