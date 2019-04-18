import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isLoggedIn() : boolean {
    const token = sessionStorage.getItem('token');

    if(token) {
      return true;
    }

    return false;
  }
}
