import { Component, NgModule } from '@angular/core';
import { DataService } from '../data.service';
import { RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { TextCutPipe } from '../pipe/text-cut.pipe';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [NgClass, TextCutPipe],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  allData: any[] = [];
  allBooks: any[] = [];
  category_id: any;
  constructor(private dataService: DataService) {
    this.getBooks();
    this.getCategory();
  }
  getBooks() {
    this.dataService.getBooks().subscribe((data: any) => {
      this.allBooks = data;
    });
  }
  getCategory() {
    this.dataService.getData().subscribe((data: any) => {
      console.log(data);
      this.allData = data;
    });
  }
  selectedCategoryId: any = 'all';
  filterCategory(categoryId: any) {
    if (categoryId === 'all') {
      this.selectedCategoryId = 'all';
      this.getBooks();
    } else {
      this.selectedCategoryId = categoryId;
      this.getBooksByCategory(categoryId);
    }
  }
  getBooksByCategory(categoryId: any) {
    this.dataService.getBooksByCategory(categoryId).subscribe((data: any) => {
      this.allBooks = data;
    });
  }
}
