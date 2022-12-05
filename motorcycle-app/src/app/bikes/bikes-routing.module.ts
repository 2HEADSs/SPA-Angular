import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { CreateBikesComponent } from './create-bikes/create-bikes.component';

const routes: Routes = [
  {
    path: 'bikes/catalog',
    component: BikesListComponent
  },
  {
    path: 'bikes/create',
    component: CreateBikesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikesRoutingModule { }
