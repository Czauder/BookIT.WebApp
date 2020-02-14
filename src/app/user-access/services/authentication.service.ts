import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { LoginResult } from '../models/login-result.model';
import { User } from '../models/user.model';
import { JwtDecoderService } from './jwt-decoder.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<string>;
  public myUser: User;

  constructor(private http: HttpClient, private jwtDecoderService: JwtDecoderService) {
    console.log("TOKEN " + localStorage.getItem('currentUser'));

    this.currentUserSubject = new BehaviorSubject<User>(null);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public registerCustomer(registerForm: any): Observable<any> {
    console.log(registerForm);
    return this.http.post<any>(`${environment.baseURL}/api/auth/signup`, registerForm).pipe(
      map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', user.token);
        return user;
      })
    );
  }

  public login(loginForm: any) {
    console.log(loginForm);
    return this.http.post<LoginResult>(`${environment.baseURL}/api/auth/signin`, loginForm).pipe(
      tap(user => {
        this.setToken(user.token);
      })
    );
  }

  public logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  public setToken(token) {
    localStorage.setItem('currentUser', token);
    let usr = this.jwtDecoderService.getDecodedAccessToken(token);
    console.log("USR" + usr)
    this.currentUserSubject.next(usr);
  }
}
