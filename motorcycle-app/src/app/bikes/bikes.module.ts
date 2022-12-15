import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BikesRoutingModule } from './bikes-routing.module';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { CreateBikesComponent } from './create-bikes/create-bikes.component';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { EditComponent } from './edit/edit.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MyBikesComponent } from './my-bikes/my-bikes.component';
import { MyLikesComponent } from './my-likes/my-likes.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    BikeDetailsComponent,
    CreateBikesComponent,
    BikesListComponent,
    EditComponent,
    MyBikesComponent,
    MyLikesComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    BikesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class BikesModule { }
