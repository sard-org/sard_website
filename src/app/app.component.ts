import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { BooksComponent } from './books/books.component';
import { FaqComponent } from './faq/faq.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    BooksComponent,
    FaqComponent,
    NgxSpinnerModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentPage = 1;
  pageSize = 4;
  allData: any[] = [];
  displayedPosts: any[] = [];
  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe((data: any) => {
      console.log(data);
      this.allData = data;
      this.updateDisplayedPosts();
    });
  }

  updateDisplayedPosts() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.displayedPosts = this.allData.slice(start, end);
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
    return Math.ceil(this.allData.length / this.pageSize);
  }
}
