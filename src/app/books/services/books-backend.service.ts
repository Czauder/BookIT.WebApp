import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksBackendService {
  constructor(private http: HttpClient) {}

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.baseURL}/api/books`);
  }

  public getBook(bookId: any): Observable<any> {
    return this.http.get<any>(`${environment.baseURL}/api/books/${bookId}`);
  }
}
