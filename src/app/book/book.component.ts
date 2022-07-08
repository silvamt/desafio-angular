import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

import { Book } from '../book';

import { BookService } from '../book.service';

import { faShoppingCart, faBackward } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
book?: Book;
baseApiUrl = environment.baseApiUrl;

faBackward = faBackward;
faShoppingCart = faShoppingCart;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
     
      const id = Number(this.route.snapshot.paramMap.get("id"));
      this.bookService.getBook(id).subscribe(book => this.book = book);
}
}
