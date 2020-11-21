import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit {

  /*rs = [100, 150, 200, 250];
  gs = [100];
  bs = [100, 150, 200, 250];*/

  /*rs = [100, 125, 150, 175, 200, 225, 250];
  gs = [100, 125, 150, 175, 200, 225, 250];
  bs = [100, 125, 150, 175, 200, 225, 250];*/

  rs = [0, 25, 55, 80, 105, 125, 150, 175, 200, 225, 255];
  gs = [0, 30, 55, 80, 105, 125, 150, 175, 200, 225, 255];
  bs = [0, 30, 55, 80, 105, 125, 150, 175, 200, 225, 255];

  /*rs = [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250];
  gs = [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250];
  bs = [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250];*/

  /*rs = [100, 150, 200];
  gs = [100, 150, 200];
  bs = [100, 150, 200];*/


  constructor() { }

  ngOnInit(): void {
  }

}
