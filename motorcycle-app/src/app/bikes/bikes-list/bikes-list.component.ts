import { Component, OnInit } from '@angular/core';
import { IBikes } from 'src/app/interfaces/bikes';
import { BikesService } from '../bikes.service';

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.css']
})
export class BikesListComponent implements OnInit {
  

  bikesList: IBikes[] | null = null;

  constructor(private bikesSerice: BikesService) { }

  ngOnInit(): void {
    this.bikesSerice.loadAllBike().subscribe({
      next: (bikes) => {
        console.log(bikes);
        
        this.bikesList = bikes
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

}
