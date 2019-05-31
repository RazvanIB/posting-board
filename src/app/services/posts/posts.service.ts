import { LoginService } from './../login/login.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';
import { IComment } from 'src/app/models/comment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public current_username: string;

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  get_posts() {
    return this.httpClient.get((localStorage.getItem('baseURL')) + '/users/' + sessionStorage.getItem('username') + '/posts', {
      headers: this.loginService.headers
    });
  }

  getCommentsByUsernameAndPostId(username: string, postId: number) {
    return this.httpClient.get((localStorage.getItem('baseURL')) + '/users/' + `${username}` + '/posts/' + `${postId}` + '/comments', {
      headers: this.loginService.headers
    })
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

  deleteCommentById(postId: number, id: number) {
    return this.httpClient.delete(localStorage.getItem('baseURL') + '/users/' + sessionStorage.getItem('username') + 
    '/posts/' + postId + '/comments/' + id, {
      observe: 'response',
      headers: this.loginService.tokenHeaders
    },)
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

  createNewComment(postId: number, author: string, username: string, content: string) {
    return this.httpClient.post(
      localStorage.getItem('baseURL') + '/users/' + author + '/posts/' + postId + '/comments', JSON.stringify({"author": username, "description": content}), {
        observe: 'response',
        headers: this.loginService.headers
      }
    )
  }

  setCurrentUsername(new_username: string) {
    this.current_username = new_username;
  }

  getPostTranslation(selected: string, postId: number) {
    return this.httpClient.get(localStorage.getItem('baseURL') + "/users/" + sessionStorage.getItem("username_requested") + "/posts/" +
    postId + "/translate?lang=" + selected, {
      observe: "response",
      headers: this.loginService.tokenHeaders
    })
  }

  getImageLocation(postId: number, zoom: number, imageWidth: number, imageHeight: number) {
    return this.httpClient.get(localStorage.getItem('baseURL') + '/users/' + sessionStorage.getItem('username_requested') + '/posts/' +
    postId + '/locate?zoom=' + zoom + '&width=' + imageWidth + '&height=' + imageHeight, {
      observe: "response",
      headers: this.loginService.tokenHeaders
    })
  }

  getPostAnalysis(postId: number) {
    return this.httpClient.get(localStorage.getItem('baseURL') + '/users/' + sessionStorage.getItem('username_requested') + '/posts/' +
    postId + '/analyze', {
      observe: "response",
      headers: this.loginService.tokenHeaders
    })
  }
}
