import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { IsGuest } from '../shared/routeGards/isGuest.guards';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { CreateBikesComponent } from './create-bikes/create-bikes.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: 'bikes',
    children: [
      {
        path: 'catalog',
        component: BikesListComponent
      },
      {
        path: 'create',
        component: CreateBikesComponent,
        canActivate: [IsGuest]
      },
      {
        path: 'edit/:id',
        component: EditComponent,
        canActivate: [IsGuest]
      },
      {
        path: 'details/:id',
        component: BikeDetailsComponent,
        canActivate: [IsGuest]
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikesRoutingModule { }
