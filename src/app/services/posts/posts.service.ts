import { LoginService } from './../login/login.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';

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

  getPostsByUsername(username: number) {
    return this.httpClient.get(localStorage.getItem('baseURL') + '/users/' + `${username}` + '/posts', {
      headers: this.loginService.headers
    });
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

  getPostTranslation(selected: string, postId: number) {
    return this.httpClient.get(localStorage.getItem('baseURL') + "/users/" + sessionStorage.getItem('username') + "/posts/" +
    postId + "/translate?lang=" + selected, {
      observe: "response",
      headers: this.loginService.tokenHeaders
    })
  }

  getImageLocation(postId: number, zoom: number, imageWidth: number, imageHeight: number) {
    return this.httpClient.get(localStorage.getItem('baseURL') + '/users/' + sessionStorage.getItem('username') + '/posts/' +
    postId + '/locate?zoom=' + zoom + '&width=' + imageWidth + '&height=' + imageHeight, {
      observe: "response",
      headers: this.loginService.tokenHeaders
    })
  }

  getPostAnalysis(postId: number) {
    return this.httpClient.get(localStorage.getItem('baseURL') + '/users/' + sessionStorage.getItem('username') + '/posts/' +
    postId + '/analyze', {
      observe: "response",
      headers: this.loginService.tokenHeaders
    })
  }
}
