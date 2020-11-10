import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-blue-login-form',
  templateUrl: './blue-login-form.component.html',
  styleUrls: ['./blue-login-form.component.css']
})
export class BlueLoginFormComponent implements OnInit {

  hide = true;

  username = new FormControl('');
  password = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
