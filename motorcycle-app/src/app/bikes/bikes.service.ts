import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IBike } from '../shared/interfaces/bikes';

const apiUrl = environment.apiUrl
@Injectable({
  providedIn: 'root'
})

export class BikesService {
  id: string = ''

  constructor(private httpClient: HttpClient) { }
  //todo - <any> - set interface

  loadAllBike() {

    return this.httpClient.get<IBike[]>(`${apiUrl}/bikes`)
  }

  loadMyBikes() {

    return this.httpClient.get<IBike[]>(`${apiUrl}/bikes/my-bikes`)
  }

  loadOneBike(id: string) {
    return this.httpClient.get<IBike>(`${apiUrl}/bikes/${id}`)
  }

  createBike(bike: {},) {
    console.log(bike);

    return this.httpClient.post(`${apiUrl}/bikes`, bike)
  }

  updateBike(bike: {}, id:string) {

    return this.httpClient.put(`${apiUrl}/bikes/${id}`, bike)
  }


}