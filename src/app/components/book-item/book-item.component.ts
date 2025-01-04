import { Component, OnDestroy, OnInit } from '@angular/core';
import { BooksServicesService } from '../../services/books-services.service';
import { Subscription } from 'rxjs';
import { ExpectBook } from '../../services/interfaces/books.interface';

@Component({
  selector: 'app-book-item',
  standalone: false,

  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss',
})
export class BookItemComponent implements OnInit, OnDestroy {
  books: ExpectBook[] = [];
  constructor(public booksService: BooksServicesService) {}

  bookSubscription = new Subscription();

  ngOnInit(): void {
    this.bookSubscription = this.booksService.bookSubject$.subscribe(
      (val: ExpectBook[]) => {
        console.log('book Item component: ', val);
        this.books = val;
      }
    );
  }

  ngOnDestroy(): void {
    this.bookSubscription.unsubscribe();
  }
  addToWishlist(book: ExpectBook) {
    this.booksService.addToWishlist(book);
  }
}
