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
  public currentUser: Observable<User>;
  public myUser: User;

  constructor(private http: HttpClient, private jwtDecoderService: JwtDecoderService) {
    this.currentUserSubject = new BehaviorSubject<User>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public registerCustomer(registerForm: any): Observable<any> {
    return this.http.post<any>(`${environment.baseURL}/api/auth/signup`, registerForm).pipe(
      map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', user.token);
        return user;
      })
    );
  }

  // tslint:disable-next-line: typedef
  public login(loginForm: any) {
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

  public setToken(token: any): any {
    localStorage.setItem('currentUser', token);
    const usr = this.jwtDecoderService.getDecodedAccessToken(token);
    this.currentUserSubject.next(usr);
  }
}
