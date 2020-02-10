import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, fromEvent } from 'rxjs';
import { Book } from '../models/book.model';
import { retryWhen } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksBackendService {
  private url = 'http://localhost:5050';

  constructor(private http: HttpClient) {}

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url + '/api/books').pipe(retryWhen(_ => fromEvent(window, 'online')));
  }
}
