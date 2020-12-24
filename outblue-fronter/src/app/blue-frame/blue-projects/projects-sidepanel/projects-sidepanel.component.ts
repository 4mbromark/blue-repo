import { LightningService } from './../../../blue-utils/blue-service/lightning.service';
import { BaseTableService } from 'src/app/blue-utils/blue-base/base-table/base-table.service';
import { Component, OnInit } from '@angular/core';
import { RowClickedEvent } from 'ag-grid-community';

@Component({
  selector: 'app-projects-sidepanel',
  templateUrl: './projects-sidepanel.component.html',
  styleUrls: ['./projects-sidepanel.component.css']
})
export class ProjectsSidepanelComponent implements OnInit {

  row: RowClickedEvent;

  service: BaseTableService;

  constructor(
    private lightning: LightningService
  ) {
    this.service = lightning.getTableService();
  }

  ngOnInit(): void {
    this.service.getSidepanel().subscribe((row: RowClickedEvent) => {
      this.row = row;
    });
  }

  getProjectName(): string {
    const name = this.row.data.nameExtended ? this.row.data.nameExtended : this.row.data.name;
    return name ? name.toUpperCase() : '';
  }

  closeInformations(): void {
    this.service.closeInformations();
  }

}
