import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-basic-selector',
  templateUrl: './color-basic-selector.component.html',
  styleUrls: ['./color-basic-selector.component.css']
})
export class ColorBasicSelectorComponent implements OnInit {

  hs = [];
  ss = [];
  ls = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 360; i += 40) { // 23 for reduced scale / original: 40
      this.hs.push(i);
    }
    this.ss.push(100); // era 60
    for (let i = 30; i < 100; i += 8) { // 18 for reduced scale / original: 8
      this.ls.unshift(i);
    }
  }

}
