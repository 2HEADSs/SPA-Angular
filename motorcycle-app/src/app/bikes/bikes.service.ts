import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
// import { ITheme } from './interfaces/theme';
// import { IPost } from './interfaces/posts';

const apiUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //here we take server- http client
  constructor(private httpClient: HttpClient) { }
//todo - 
  loadAllBike(){
    return this.httpClient.get<any>(`${apiUrl}/themes`)
  }
  // https://localhost:3000/api/posts?limit=5
  loadPosts(limit?: number){
    return this.httpClient.get<any>(`${apiUrl}/posts${limit ? `?limit=${limit}`: ''}`);
  }

}