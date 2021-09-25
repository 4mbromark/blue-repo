import { BaseWindowComponent } from '../blue-base/base-window/base-window.component';
import { Injectable } from '@angular/core';
import { BaseTableComponent } from '../blue-base/base-table/base-table.component';
import { BaseTableService } from '../blue-base/base-table/base-table.service';
import { BaseWindowService } from '../blue-base/base-window/base-window.service';

@Injectable({
  providedIn: 'root'
})
export class LightningService {

  tableComponent: BaseTableComponent;
  tableService: BaseTableService;

  windowComponent: BaseWindowComponent;
  windowService: BaseWindowService;

  constructor() { }

  getTableComponent(): BaseTableComponent {
    return this.tableComponent;
  }
  getTableService(): BaseTableService {
    return this.tableService;
  }

  setTableComponent(tableComponent: BaseTableComponent): void {
    this.tableComponent = tableComponent;
  }
  setTableService(tableService: BaseTableService): void {
    this.tableService = tableService;
  }
  setTable(tableComponent: BaseTableComponent, tableService: BaseTableService): void {
    this.tableComponent = tableComponent;
    this.tableService = tableService;
  }

  getDialogComponent(): BaseWindowComponent {
    return this.windowComponent;
  }
  getDialogService(): BaseWindowService {
    return this.windowService;
  }

  setDialogComponent(dialogComponent: BaseWindowComponent): void {
    this.windowComponent = dialogComponent;
  }
  setDialogService(windowService: BaseWindowService): void {
    this.windowService = windowService;
  }
  setDialog(windowComponent: BaseWindowComponent, windowService: BaseWindowService): void {
    this.windowComponent = windowComponent;
    this.windowService = windowService;
  }
}
