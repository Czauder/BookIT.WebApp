import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, fromEvent } from 'rxjs';
import { map, retryWhen } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { JwtDecoderService } from './jwt-decoder.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<string>;
  public myUser: User;

  constructor(private http: HttpClient, private jwtDecoderService: JwtDecoderService) {
    console.log(localStorage.getItem('currentUser'));

    this.currentUserSubject = new BehaviorSubject<User>(null);
  }

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

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
      }), 
    );
  }

  public login(loginForm: any) {
    console.log(loginForm);
    return this.http.post<LoginResult>(`${environment.baseURL}/api/auth/signin`, loginForm).pipe(
      map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', user.token);
        let usr = this.jwtDecoderService.getDecodedAccessToken(user.token);
        this.currentUserSubject.next(usr);
        return user;
      }),
    );
  }

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}

interface LoginResult {
  message: string;
  customerId: string;
  token: string;
}
