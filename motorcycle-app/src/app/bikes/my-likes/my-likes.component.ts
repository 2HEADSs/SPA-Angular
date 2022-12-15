import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IBike } from 'src/app/shared/interfaces/bikes';
import { BikesService } from '../bikes.service';

@Component({
  selector: 'app-my-likes',
  templateUrl: './my-likes.component.html',
  styleUrls: ['./my-likes.component.css']
})
export class MyLikesComponent implements OnInit {

  bikesList: IBike[] | null = null;
  hasBikes: boolean = false

  constructor(private bikesSerice: BikesService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.bikesSerice.loadMyLikes().subscribe({
      next: (bikes) => {

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
