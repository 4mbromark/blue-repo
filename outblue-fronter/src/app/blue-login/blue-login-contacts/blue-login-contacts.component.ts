import { Component, OnInit } from '@angular/core';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { Name } from 'src/app/blue-utils/blue-enum/word/name';

@Component({
  selector: 'app-login-contacts',
  templateUrl: './blue-login-contacts.component.html',
  styleUrls: ['./blue-login-contacts.component.css']
})
export class BlueLoginContactsComponent implements OnInit {

  fb = faFacebookSquare;
  ig = faInstagramSquare;

  names = Name;

  constructor() { }

  ngOnInit(): void {
  }

}
