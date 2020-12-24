import { Component, OnInit } from '@angular/core';
import { INoRowsOverlayAngularComp } from 'ag-grid-angular';
import { INoRowsOverlayParams } from 'ag-grid-community';

@Component({
  selector: 'app-empty-overlay',
  templateUrl: './empty-overlay.component.html',
  styleUrls: ['./empty-overlay.component.css']
})
export class EmptyOverlayComponent implements INoRowsOverlayAngularComp {

  params: any;

  constructor() { }

  agInit(params: INoRowsOverlayParams): void {
    this.params = params;
  }

}
