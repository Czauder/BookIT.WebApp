import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthBackendService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  public registerCustomer(registerForm: any): Observable<any> {
    console.log(registerForm);
    return this.http.post(environment.baseURL + '/api/auth', registerForm, {headers: this.headers});
  }
}
