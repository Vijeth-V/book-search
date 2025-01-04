import { Component } from '@angular/core';
import { BooksServicesService } from '../../services/books-services.service';

@Component({
  selector: 'app-book-search',
  standalone: false,

  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.scss',
})
export class BookSearchComponent {
  searchTerm = '';

  constructor(private booksService: BooksServicesService) {}

  searchBooks() {
    this.booksService.getBooks(this.searchTerm).subscribe();
  }
}
