import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SubscriptionType } from '../subscription-type.enum';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  public addSubscriptions(subscriptionType: SubscriptionType): Observable<any> {
    return this.http.post(
      environment.baseURL + '/api/subscriptions',
      { customerId: localStorage.getItem('AccessToken'), subscriptionType },
      { headers: this.headers }
    );
  }
}
