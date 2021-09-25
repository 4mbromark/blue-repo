import { Name } from 'src/app/blue-utils/blue-enum/word/name';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-product-bar',
  templateUrl: './standard-product-bar.component.html',
  styleUrls: ['./standard-product-bar.component.css']
})
export class StandardProductBarComponent implements OnInit {

  names = Name;

  constructor() { }

  ngOnInit(): void {
  }

}
