import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  private booksApiUrl = '/api/books';
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get(this.booksApiUrl);
}

}





 