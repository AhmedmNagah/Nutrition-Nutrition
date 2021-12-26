import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  //posts: any;

  url : string="https://api.edamam.com/api/nutrition-details";
  constructor(private http:HttpClient){
    
  }
  ngOnInit(): void {
    this.http.get(this.url).subscribe(Response=>{
      console.log(Response);
    })

  }

}
