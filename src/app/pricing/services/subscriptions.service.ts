import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SubscriptionType } from '../subscription-type.enum';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {
  private headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + localStorage.getItem('AccessToken'));

  constructor(private http: HttpClient) {}

  public addSubscriptions(subscriptionType: SubscriptionType): Observable<any> {
    return this.http.post(
      environment.baseURL + '/api/subscriptions',
      { customerId: '9b01456a-444e-4989-9cb4-20756fde79ef', subscriptionType },
      { headers: this.headers }
    );
  }
}
