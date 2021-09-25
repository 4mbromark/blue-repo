import { SidebarService } from './../blue-sidebar/blue-sidebar.service';
import { Name } from './../../blue-utils/blue-enum/word/name';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './blue-topbar.component.html',
  styleUrls: ['./blue-topbar.component.css']
})
export class BlueTopbarComponent implements OnInit {

  names = Name;

  constructor(
    private sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
  }

  setLeftbarOpened() {
    this.sidebarService.setLeftbarOpened();
  }
}
