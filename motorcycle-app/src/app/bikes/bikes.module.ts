import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBikesComponent } from './create-bikes/create-bikes.component';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';



@NgModule({
  declarations: [
    CreateBikesComponent,
    BikesListComponent,
    BikeDetailsComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class BikesModule { }
