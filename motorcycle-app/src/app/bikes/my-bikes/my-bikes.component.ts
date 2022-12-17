import { Component, OnInit } from '@angular/core';
import { IBike } from 'src/app/shared/interfaces/bikes';
import { BikesService } from '../bikes.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-my-bikes',
  templateUrl: './my-bikes.component.html',
  styleUrls: ['./my-bikes.component.css']
})
export class MyBikesComponent {


  bikesList: IBike[] | null = null;
  hasBikes: boolean = true
  user: IUser | null = null

  constructor(private bikesSerice: BikesService, public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.authService.user
    this.bikesSerice.loadMyBikes().subscribe({
      next: (bikes) => {
        if (!bikes) { return }
        this.bikesList = bikes
        if (this.bikesList.length > 0) {
          this.hasBikes = true;
        } else {
          this.hasBikes = false
        }
      },
      error: (err) => {
        console.log(err);
        this.authService.errorString = 'Sorry we can\'t load bikes from DataBase'
        this.router.navigate(['/'])
      }
    })
  }



}
