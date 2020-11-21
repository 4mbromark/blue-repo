import { Component } from '@angular/core';
import { BaseTableService } from './base-table.service';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.css']
})
export class BaseTableComponent {

  rowData = [];
  columnDefs = [];

  gridOptions = {
    columnDefs: this.columnDefs,
    rowData: this.rowData,
    rowHeight: 50
  };

  constructor(private service: BaseTableService) {
  }

  openInformations(): void {
    this.service.openInformations();
  }
  openInformationsFull(): void {
    this.service.openInformationsFull();
  }

  getTableSize(): number {
    return this.service.getTableSize();
  }
  getInfoSize(): number {
    return this.service.getInfoSize();
  }
}
