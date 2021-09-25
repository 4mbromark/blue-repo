import { TableComponent } from './../../blue-utils/blue-base/base-table/table.component';
import { LanguageLabel } from './../../blue-utils/blue-language/language-labels';
import { Table } from './../../blue-utils/blue-enum/table';
import { TasklistService } from './tasklist.service';
import { Component } from '@angular/core';
import { BaseTableComponent } from 'src/app/blue-utils/blue-base/base-table/base-table.component';
import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';
import { ColGroupDef } from 'ag-grid-community';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent extends BaseTableComponent implements TableComponent {

  public columnDefs = Table.TASKLIST_TABLE as unknown as ColGroupDef[];

  public emptyOverlayParams = {
    text: LanguageLabel.TABLE_NOTASKS
  };

  constructor(
    protected lightning: LightningService,
    protected tasklistService: TasklistService
  ) {
    super(lightning, tasklistService);
  }

  public setColumnState(): void {
    const state = this.tasklistService.getColumnState();
    this.applyColumnState(state);
  }

  public updateColumnState(): void {
    if (this.loaded) {
      const state = this.filterColumnState();
      this.tasklistService.updateColumnState(state);
    }
  }

  public getRowHeight(params): number {
    return params.data.description ? 60 : 40;
  }
}
