import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncrDecrService {

  constructor() { }

  public set(value) {
    let encrypted = CryptoJS.SHA256(value);

    return encrypted.toString();
  }
}
