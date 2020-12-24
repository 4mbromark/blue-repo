import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-standard-spinner',
  templateUrl: './standard-spinner.component.html',
  styleUrls: ['./standard-spinner.component.css']
})
export class StandardSpinnerComponent implements OnInit  {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
  }

}
