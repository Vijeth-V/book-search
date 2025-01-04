import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookRes, ExpectBook, ItemsEntity } from './interfaces/books.interface';
import { BehaviorSubject, map, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksServicesService {
  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  // bookSubject$ = new BehaviorSubject<ExpectBook[]>([]);
  bookSubject$ = new Subject<ExpectBook[]>();

  wishList: string[] = [];
  wishlistSubject$ = new Subject<string[]>();

  constructor(private http: HttpClient) {}

  getBooks(searchTerm: string) {
    return this.http.get<BookRes>(this.baseUrl + searchTerm).pipe(
      map((val: BookRes) => {
        return val.items?.map(({ volumeInfo: info }: ItemsEntity) => {
          return {
            bookName: info.title,
            bookPic: info.imageLinks.thumbnail,
            publisher: info.publisher,
            publishDate: info.publishedDate,
            description: info.description,
          } as ExpectBook;
        });
      }),
      tap((val: ExpectBook[]) => {
        this.bookSubject$.next(val);
      })
    );
  }

  addToWishlist(book: ExpectBook) {
    if (!this.wishList.includes(book.bookName)) {
      this.wishList = [book.bookName, ...this.wishList];
      this.wishlistSubject$.next(this.wishList);
    }
  }
}
