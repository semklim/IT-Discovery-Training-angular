import {Component} from '@angular/core';
import {Book} from "../book";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  book: Book;

  symbolCount?: number;

  constructor() {
    this.book = {
      title: "Angular 15",
      author: "Misko Hevery",
      year: 2023,
      description: "Angular development guide",
      pages: 1000
    }
  }

  onClick(text: string | number | undefined): void {
    this.symbolCount = text?.toString().length;
  }
}
