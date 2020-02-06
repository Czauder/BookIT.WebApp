import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SubscriptionType } from '../subscription-type.enum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {
  private url = 'http://localhost:5050';

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  public addSubscriptions(subscriptionType: SubscriptionType): Observable<any> {
    return this.http.post(
      this.url + '/api/subscriptions',
      { customerId: localStorage.getItem('AccessToken'), subscriptionType },
      { headers: this.headers }
    );
  }
}
