import { ProjectsService } from './projects.service';
import { BaseTableComponent } from 'src/app/blue-utils/blue-base/base-table/base-table.component';
import { Component } from '@angular/core';
import { Table } from 'src/app/blue-utils/blue-enum/table';
import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent extends BaseTableComponent {

  columnDefs = Table.PROJECTS_TABLE;

  constructor(protected lightning: LightningService, protected projectsService: ProjectsService) {
    super(lightning, projectsService);
  }
}
