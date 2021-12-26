import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  id = "503528f7";
  key = "b275cc0a81af238ad83391cd8360553d";
  amountPerServing = "";
  theData: any;
  ingr:string

  constructor(data: DataService, private http: HttpClient,private spinner: NgxSpinnerService) {
    this.ingr = data.getOption();
    this.getResponse(this.ingr);
  }

  getResponse(ingr: string) {

    this.http.get('https://api.edamam.com/api/nutrition-data?app_id=' + this.id
    + '&app_key=' + this.key + '&ingr=' + ingr).subscribe(data => {
          this.theData = data;
    })
    this.amountPerServing=ingr;
  }
  ;

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }
}
