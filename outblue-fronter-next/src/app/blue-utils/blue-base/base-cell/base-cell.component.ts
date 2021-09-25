import { BaseTableService } from 'src/app/blue-utils/blue-base/base-table/base-table.service';
import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';

@Component({
  selector: 'app-base-cell',
  templateUrl: './base-cell.component.html',
  styleUrls: ['./base-cell.component.css']
})
export class BaseCellComponent implements ICellRendererAngularComp, OnInit {
  @ViewChild('trigger', {read: MatMenuTrigger}) trigger: MatMenuTrigger;

  params: ICellRendererParams;
  value: any;

  service: BaseTableService;

  saving = false;

  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    event.preventDefault();
    this.clipboard.copy(this.value);
    return false;
  }
  constructor(
    protected lightning: LightningService,
    protected clipboard: Clipboard
  ) {
    this.service = this.lightning.getTableService();
  }

  ngOnInit(): void {
    this.value = this.params.value;
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

  triggerMenu(event: any): void {
    this.trigger.openMenu();
    event.stopPropagation();
  }
}
