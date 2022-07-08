import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

import { Book } from '../book';

import { environment } from 'src/environments/environment';

import { faEye, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

allBooks: Book[] = []
books: Book[] = []
baseApiUrl = environment.baseApiUrl

faSearch = faSearch;
faEye = faEye;
faShoppingCart = faShoppingCart;
searchTerm: string = '';


  constructor(private bookService: BookService) { }

  ngOnInit(): void {
this.bookService.getBooks().subscribe((items) => {
      this.allBooks = items;
      this.books = items;
    })


    }
  search (e: Event): void {
const target = e.target as HTMLInputElement
const value = target.value

this.books = this.allBooks.filter(book => {
  return book.name.toLowerCase().includes(value);
})

  }

}
