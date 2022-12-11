import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikesService } from '../bikes.service';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent implements OnInit {

  singleBike: any | null = null
  

  constructor(private bikesSerice: BikesService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id']
    
    this.bikesSerice.loadOneBike(id).subscribe({
      next: (bike) => {
        this.singleBike = bike
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
