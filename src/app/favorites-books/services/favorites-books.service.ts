import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesBooksService {
  constructor(private http: HttpClient) {}

  public getFavoritesBooks(customerId): Observable<any> {
    return this.http.get<any>(`${environment.baseURL}/api/favorites/${customerId}`);
  }

  public postFavoritesBooks(customerId: string, bookId: string): Observable<any> {
    return this.http.post(`${environment.baseURL}/api/favorites/`, { customerId, bookId });
  }

  public deleteFavoritesBooks() {
    this.http.get(`${environment.baseURL}/api/favorites/`);
  }
}
