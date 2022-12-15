import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  isOwner: Boolean = false;
  errors: string | undefined = undefined;


  constructor(private bikesService: BikesService, private activatedRoute: ActivatedRoute, private authService: AuthService, private router:Router) { }
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id']

    this.bikesService.loadOneBike(id).subscribe({
      next: (bike) => {

        this.singleBike = bike
        //todo errorString = error.message
        if (this.singleBike._ownerId._id === this.authService?.user?._id) {
          this.isOwner = true
        }

      },
      error: (err) => {
        this.authService.errorString = err.message;
        console.log(err);
        this.router.navigate(['/'])
      }
    })
  }
  deleteBike():void{
    const id = this.singleBike?._id  
    
    this.bikesService.deleteBike(id!).subscribe({
      next: () => {        
        this.router.navigate(['/bikes/catalog'])
      },
      error: (err) => {
        console.log(err.error);
        this.errors = err.error.error
      }

    })
    

  }

}
