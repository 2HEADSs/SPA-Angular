import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
// import { ITheme } from './interfaces/theme';
// import { IPost } from './interfaces/posts';

const apiUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class BikesService {

  //here we take server- http client
  constructor(private httpClient: HttpClient) { }
  //todo - <any> - set interface
  
  loadAllBike() {
    console.log('asdasda');
    
    return this.httpClient.get<any>(`${apiUrl}/bikes/catalog`)
  }


}