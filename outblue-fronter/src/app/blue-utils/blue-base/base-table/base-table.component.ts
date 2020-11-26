import { Component } from '@angular/core';
import { LightningService } from '../../blue-service/lightning.service';
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

  constructor(protected lightning: LightningService, protected service: BaseTableService) {
    this.lightning.setTableService(this.service);
    this.rowData = this.service.getAll();
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
