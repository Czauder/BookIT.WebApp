import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class JwtDecoderService {
  constructor() {}

  public getDecodedAccessToken(token: string): User {
    try {
      console.log(jwt_decode(token));
      const decodedToken = jwt_decode(token);
      const usr = new User(decodedToken.nameid, decodedToken.email, decodedToken.role);
      return usr;
    } catch (Error) {
      return null;
    }
  }
}
