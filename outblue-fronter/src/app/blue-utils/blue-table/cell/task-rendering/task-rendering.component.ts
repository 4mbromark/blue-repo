import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit } from '@angular/core';
import { BaseCellComponent } from 'src/app/blue-utils/blue-base/base-cell/base-cell.component';

@Component({
  selector: 'app-task-rendering',
  templateUrl: './task-rendering.component.html',
  styleUrls: ['./task-rendering.component.css']
})
export class TaskRenderingComponent extends BaseCellComponent implements OnInit {

  constructor(
    protected clipboard: Clipboard
  ) {
    super(clipboard);
  }

}
