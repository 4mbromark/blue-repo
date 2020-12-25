import { BaseTableComponent } from 'src/app/blue-utils/blue-base/base-table/base-table.component';
import { BaseWindowComponent } from 'src/app/blue-utils/blue-base/base-window/base-window.component';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseWindowService } from 'src/app/blue-utils/blue-base/base-window/base-window.service';
import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';

@Component({
  selector: 'app-projects-all',
  templateUrl: './projects-all.component.html',
  styleUrls: ['./projects-all.component.css']
})
export class ProjectsAllComponent extends BaseWindowComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private lightning: LightningService,
    protected service: BaseWindowService
  ) {
    super(data, service);
    this.lightning.setDialogService(service);
  }

}
