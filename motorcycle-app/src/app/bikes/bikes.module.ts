import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BikesRoutingModule } from './bikes-routing.module';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { CreateBikesComponent } from './create-bikes/create-bikes.component';
import { BikesListComponent } from './bikes-list/bikes-list.component';


@NgModule({
  declarations: [
    BikeDetailsComponent,
    CreateBikesComponent,
    BikesListComponent
  ],
  imports: [
    CommonModule,
    BikesRoutingModule
  ]
})
export class BikesModule { }
