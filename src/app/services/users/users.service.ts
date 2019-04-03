import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = "http://localhost:3000";
  
  constructor(private httpClient : HttpClient) {}

  get_users() {
    return this.httpClient.get(this.baseUrl + '/users');
  }

  getPostsByUserId(id: number) {
    return this.httpClient.get(this.baseUrl + '/users?userId=' + `${id}`);
  }
}
