import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:5050';
  

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  public registerCustomer(registerForm: any): Observable<any> {
    console.log(registerForm);
    return this.http.post(this.url + '/api/auth', registerForm, {headers: this.headers});
  }
}
