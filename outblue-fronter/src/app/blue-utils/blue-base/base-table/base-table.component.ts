import { Component, OnInit } from '@angular/core';
import { Project } from '../../blue-object/record/Project';
import { Task } from '../../blue-object/record/Task';
import { LightningService } from '../../blue-service/lightning.service';
import { BaseTableService } from './base-table.service';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.css']
})
export class BaseTableComponent implements OnInit {

  rowData = [];
  columnDefs = [];

  gridOptions = {
    columnDefs: this.columnDefs,
    rowData: this.rowData,
    rowHeight: 50
  };

  constructor(protected lightning: LightningService, protected service: BaseTableService) {
    this.lightning.setTableService(this.service);
  }

  ngOnInit(): void {
    this.service.getAllOnRest().then((records: Project[] | Task[]) => {
      this.rowData = records;
    });
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
