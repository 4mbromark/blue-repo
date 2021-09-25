import { Name } from 'src/app/blue-utils/blue-enum/word/name';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-login',
  templateUrl: './blue-login.component.html',
  styleUrls: ['./blue-login.component.css']
})
export class BlueLoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: MatExpansionPanel;

  names = Name;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loginForm.toggle();
    }, 1000);
  }
}
