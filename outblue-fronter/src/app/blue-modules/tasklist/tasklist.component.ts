import { Table } from './../../blue-utils/blue-enum/table';
import { TasklistService } from './tasklist.service';
import { Component } from '@angular/core';
import { BaseTableComponent } from 'src/app/blue-utils/blue-base/base-table/base-table.component';
import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent extends BaseTableComponent {

  columnDefs = Table.TASKLIST_TABLE;

  constructor(protected lightning: LightningService, protected tasklistService: TasklistService) {
    super(lightning, tasklistService);
  }
}