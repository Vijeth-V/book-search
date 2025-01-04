import { Component } from '@angular/core';
import { BooksServicesService } from '../../services/books-services.service';

@Component({
  selector: 'app-wishlist',
  standalone: false,

  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',
})
export class WishlistComponent {
  wishlist: any = [];

  constructor(private booksService: BooksServicesService) {}

  ngOnInit(): void {
    this.booksService.wishlistSubject$.subscribe((wishlist) => {
      this.wishlist = wishlist;
    });
  }
  deleteItem(index: number): void {
    this.wishlist.splice(index, 1);
  }
}
