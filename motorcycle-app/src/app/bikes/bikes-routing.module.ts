import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasUser } from '../shared/guards/hasUser.guard';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { CreateBikesComponent } from './create-bikes/create-bikes.component';
import { EditComponent } from './edit/edit.component';
import { MyBikesComponent } from './my-bikes/my-bikes.component';
import { MyLikesComponent } from './my-likes/my-likes.component';
import { SearchComponent } from './search/search.component';
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
        canActivate: [HasUser]
      },
      {
        path: 'my-bikes',
        component: MyBikesComponent,
        canActivate: [HasUser]
      },
      {
        path: 'my-likes',
        component: MyLikesComponent,
        canActivate: [HasUser]
      },
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: 'edit/:id',
        component: EditComponent,
        canActivate: [HasUser]
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
