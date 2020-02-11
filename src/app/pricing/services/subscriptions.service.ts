import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SubscriptionType } from '../subscription-type.enum';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/user-access/services/authentication.service';
import { User } from 'src/app/user-access/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {
  public user: User;

  private headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${localStorage.getItem('currentUser')}`);

  constructor(private http: HttpClient, private authenticationsService: AuthenticationService) {}

  public addSubscriptions(subscriptionType: SubscriptionType): Observable<any> {
    this.user = this.authenticationsService.currentUserValue;
    return this.http.post<any>(
      `${environment.baseURL}/api/subscriptions`,
      {
        customerId: this.user.customerId,
        subscriptionType
      },
      { headers: this.headers }
    );
  }
}
