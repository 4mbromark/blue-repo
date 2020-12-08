import { Name } from 'src/app/blue-utils/blue-enum/word/name';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './blue-login.component.html',
  styleUrls: ['./blue-login.component.css']
})
export class BlueLoginComponent implements OnInit {

  names = Name;

  constructor() { }

  ngOnInit(): void {
  }

}
