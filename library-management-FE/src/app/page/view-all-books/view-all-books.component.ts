import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Appmodule } from '../../module';

@Component({
  selector: 'app-view-all-books',
  standalone: true,
  imports: [HttpClientModule,Appmodule],
  templateUrl: './view-all-books.component.html',
  styleUrl: './view-all-books.component.css'
})
export class ViewAllBooksComponent implements OnInit{

  private http;
  private bookList: any = {}

  constructor(private httpClient: HttpClient) {
    this.http = httpClient
  }

ngOnInit(): void {
  this.loadBooks();
}

loadBooks(){
  this.http.get("http://localhost:8080/book/get").subscribe(data=>{
    this.bookList=data;
    console.log(this.bookList);

  });
}


}
