import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit } from '@angular/core';
import { BaseCellComponent } from 'src/app/blue-utils/blue-base/base-cell/base-cell.component';

@Component({
  selector: 'app-version-rendering',
  templateUrl: './version-rendering.component.html',
  styleUrls: ['./version-rendering.component.css']
})
export class VersionRenderingComponent extends BaseCellComponent implements OnInit {

  constructor(
    protected clipboard: Clipboard
  ) {
    super(clipboard);
  }

  ngOnInit(): void {
    this.value = this.params.value + ' - ' + this.params.data.code;
  }

}
