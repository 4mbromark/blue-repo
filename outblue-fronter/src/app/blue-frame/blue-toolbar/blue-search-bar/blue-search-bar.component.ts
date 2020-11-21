import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './blue-search-bar.component.html',
  styleUrls: ['./blue-search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  panelOpenState = true;

  constructor() { }

  ngOnInit(): void {
  }

}
