import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { CreateBikesComponent } from './create-bikes/create-bikes.component';
import { EditComponent } from './edit/edit.component';
import { MyBikesComponent } from './my-bikes/my-bikes.component';
//todo guard
const routes: Routes = [
  {
    path: 'bikes',
    children: [
      {
        path: 'catalog',
        component: BikesListComponent,
      },
      {
        path: 'create',
        component: CreateBikesComponent,
      },
      {
        path: 'my-bikes',
        component: MyBikesComponent,
      },
      {
        path: 'edit/:id',
        component: EditComponent,
      },
      {
        path: 'details/:id',
        component: BikeDetailsComponent,

      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikesRoutingModule { }
