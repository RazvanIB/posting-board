import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl: string = "http://localhost:3000";
  
  constructor(private httpClient : HttpClient) {}

  get_posts() {
    return this.httpClient.get(this.baseUrl + '/posts');
  }

  getPostsByUserId(id: number) {
    return this.httpClient.get(this.baseUrl + '/posts?userId=' + `${id}`);
  }
}
