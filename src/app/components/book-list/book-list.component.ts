import { Component, OnDestroy, OnInit } from '@angular/core';
import { BooksServicesService } from '../../services/books-services.service';
import { ExpectBook } from '../../services/interfaces/books.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  standalone: false,

  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {}
