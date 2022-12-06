import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IBikes } from '../interfaces/bikes';

const apiUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})

export class BikesService {

  constructor(private httpClient: HttpClient) { }
  //todo - <any> - set interface
  
  loadAllBike() { 

    return this.httpClient.get<IBikes[]>(`${apiUrl}/bikes`)
  }

  loadOneBike() { 
    return this.httpClient.get<any>(`${apiUrl}/bikes/:id`)
  }


}