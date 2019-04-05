import { LoginService } from './../login/login.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  get_posts() {
    return this.httpClient.get((localStorage.getItem('baseURL')) + '/users/' + sessionStorage.getItem('username') + '/posts', {
      headers: this.loginService.headers
    });
  }

  getPostsByUserId(id: number) {
    return this.httpClient.get(localStorage.getItem('baseURL') + '/posts?userId=' + `${id}`);
  }

  deletePostByPostId(id: number) {
    return this.httpClient.delete(
      localStorage.getItem('baseURL') +
      '/users/' +
      sessionStorage.getItem('username') +
      '/posts/' +
      id, {
        observe: 'response',
        headers: this.loginService.tokenHeaders
      })
  }

  createNewPost(fd: FormData) {
    console.log(fd);
    return this.httpClient.post(
      localStorage.getItem('baseURL') +
      '/users/' +
      sessionStorage.getItem('username') +
      '/posts', fd, {
        observe: 'response',
        headers: this.loginService.tokenFormDataHeaders
      }
    )
  }
}
