import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/user-access/models/user.model';
import { AuthenticationService } from 'src/app/user-access/services/authentication.service';
import { environment } from 'src/environments/environment';

import { SubscriptionType } from '../subscription-type.enum';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {
  public user: User;

  constructor(private http: HttpClient, private authenticationsService: AuthenticationService) {}

  public getSubscriptionByCustomerId(): Observable<any> {
    console.log(this.authenticationsService.currentUserValue().customerId);
    
    return this.http.get(`${environment.baseURL}/api/subscriptions/customer/${this.authenticationsService.currentUserValue().customerId}`);
  }

  public addSubscriptions(subscriptionType: SubscriptionType): Observable<any> {
    this.user = this.authenticationsService.currentUserValue();
    return this.http.post<any>(
      `${environment.baseURL}/api/subscriptions`,
      {
        customerId: this.user.customerId,
        subscriptionType
      },
    );
  }
}
