import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-spinner-cell',
  templateUrl: './standard-spinner-cell.component.html',
  styleUrls: ['./standard-spinner-cell.component.css']
})
export class StandardSpinnerCellComponent implements OnInit {
  @Input() state: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
