import { Component, OnInit } from '@angular/core';
import { faFacebook, faFacebookSquare, faInstagram, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { Name } from 'src/app/blue-utils/blue-enum/word/name';

@Component({
  selector: 'app-login-contacts',
  templateUrl: './blue-login-contacts.component.html',
  styleUrls: ['./blue-login-contacts.component.css']
})
export class BlueLoginContactsComponent implements OnInit {

  fb = faFacebook;
  ig = faInstagram;

  names = Name;

  constructor() { }

  ngOnInit(): void {
  }
}
