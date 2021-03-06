import { DataService } from 'src/app/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-responce',
  templateUrl: './responce.component.html',
  styleUrls: ['./responce.component.scss']
})
export class ResponceComponent implements OnInit {


  id = "503528f7";
  key = "b275cc0a81af238ad83391cd8360553d";
  amountPerServing = "";
  data: any;
  ingr:string;

  constructor(data: DataService, private http: HttpClient,private spinner: NgxSpinnerService) {
    this.ingr = data.getOption();
    this.getResponse(this.ingr);
  }

  getResponse(ingr: string) {
    this.http.get('https://api.edamam.com/api/nutrition-data?app_id=' + this.id
      + '&app_key=' + this.key + '&ingr=' + ingr).subscribe(data => {
        this.data = data;
      })
    this.amountPerServing = ingr;
  }
  ;

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    },1000);
  }
}
