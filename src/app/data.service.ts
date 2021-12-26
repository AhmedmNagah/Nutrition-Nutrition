import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data : any;  
  
  setOption(response: String): void {   
    this.data = response;  
  }  
  
  public getOption() {  
    return this.data;  
  }  
  constructor() {
    
   }
}
