import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IBike } from '../shared/interfaces/bikes';
import { AuthService } from '../auth/auth.service';
import { getSession } from '../shared/function/api';

const apiUrl = environment.apiUrl
@Injectable({
  providedIn: 'root'
})

export class BikesService {


  constructor(private httpClient: HttpClient, private authService: AuthService) { }
  //todo - <any> - set interface

  loadAllBike() {

    return this.httpClient.get<IBike[]>(`${apiUrl}/bikes`)
  }

  loadMyBikes() {

    return this.httpClient.get<IBike[]>(`${apiUrl}/bikes/my-bikes`, {headers:{'x-authorization': getSession().accessToken}})
  }

  loadOneBike(id: string) {
    return this.httpClient.get<IBike>(`${apiUrl}/bikes/${id}`)
  }

  createBike(bike: {},) {
    console.log(bike);

    return this.httpClient.post(`${apiUrl}/bikes`, bike, {headers:{'x-authorization': getSession().accessToken}})
  }

  updateBike(bike: {}, id: string) {

    return this.httpClient.put(`${apiUrl}/bikes/${id}`, bike, {headers:{'x-authorization': getSession().accessToken}})
  }


}