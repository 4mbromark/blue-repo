import { Clipboard } from '@angular/cdk/clipboard';
import { Component, HostListener, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';

@Component({
  selector: 'app-base-cell',
  templateUrl: './base-cell.component.html',
  styleUrls: ['./base-cell.component.css']
})
export class BaseCellComponent implements ICellRendererAngularComp, OnInit {

  params: ICellRendererParams;

  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    event.preventDefault();
    this.clipboard.copy(this.params.value);
    return false;
  }
  constructor(
    protected clipboard: Clipboard
  ) { }

  ngOnInit(): void {
  }

  refresh(params: any): boolean {
    throw new Error('Method not implemented.');
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    throw new Error('Method not implemented.');
  }

}
