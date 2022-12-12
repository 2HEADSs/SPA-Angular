import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IBike } from 'src/app/shared/interfaces/bikes';
import { BikesService } from '../bikes.service';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent implements OnInit {

  singleBike: IBike | null = null
  isOwner: Boolean = false

  constructor(private bikesSerice: BikesService, private activatedRoute: ActivatedRoute, private currentUser: AuthService) { }
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id']

    this.bikesSerice.loadOneBike(id).subscribe({
      next: (bike) => {

        this.singleBike = bike
        console.log(bike);
        console.log(this.currentUser?.user?._id);
        if (this.singleBike._ownerId._id === this.currentUser?.user?._id) {
          this.isOwner = true
        }


      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
