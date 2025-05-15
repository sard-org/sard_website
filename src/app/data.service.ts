import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrlCategories = 'https://api.mohamed-ramadan.me/api/categories';
  private apiUrlBooks = 'https://api.mohamed-ramadan.me/api/books/landing-page';
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(this.apiUrlCategories);
  }
  getBooks() {
    return this.http.get(this.apiUrlBooks);
  }
  getBooksByCategory(categoryId: any) {
    return this.http.get(this.apiUrlBooks + '?category_id=' + categoryId);
  }
}
