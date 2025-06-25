import { Component } from '@angular/core';
import { DataService } from '../data.service';
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
  currentPage = 1;
  pageSize = 6;
  displayedPosts: any[] = [];
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
      this.currentPage = 1;
      this.updateDisplayedPosts();
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
      this.currentPage = 1;
      this.updateDisplayedPosts();
    });
  }
  /**########## */
  updateDisplayedPosts() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.displayedPosts = this.allBooks.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedPosts();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedPosts();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.allBooks.length / this.pageSize);
  }
}
