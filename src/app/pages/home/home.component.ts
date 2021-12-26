import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userForm: FormGroup;
  constructor(private fb: FormBuilder, private data: DataService) {
    this.userForm = this.fb.group({
      inputText: ['', Validators.required]
    })
  }

  sendToAnalysis(ingr: string) {
    this.data.setOption(ingr);
  }

  ngOnInit(): void {
  }
}
