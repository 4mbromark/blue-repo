import { HeaderRenderingComponent } from './../../blue-table/header/header-rendering/header-rendering.component';
import { SidebarService, LeftbarStatus } from './../../../blue-frame/blue-sidebar/blue-sidebar.service';
import { TaskRenderingComponent } from './../../blue-table/cell/task-rendering/task-rendering.component';
import { INoRowsOverlayParams, RowClickedEvent } from 'ag-grid-community';
import { EmptyOverlayComponent } from './../../blue-table/overlay/empty-overlay/empty-overlay.component';
import { LoadingOverlayComponent } from './../../blue-table/overlay/loading-overlay/loading-overlay.component';
import { ColorRenderingComponent } from './../../blue-table/cell/color-rendering/color-rendering.component';
import { StatusRenderingComponent } from './../../blue-table/cell/status-rendering/status-rendering.component';
import { Component, OnDestroy, OnInit, Version } from '@angular/core';
import { GridApi, GridOptions } from 'ag-grid';
import { Project } from '../../blue-object/record/Project';
import { Task } from '../../blue-object/record/Task';
import { LightningService } from '../../blue-service/lightning.service';
import { BaseTableService } from './base-table.service';
import { ProjectRenderingComponent } from '../../blue-table/cell/project-rendering/project-rendering.component';
import { IconRenderingComponent } from '../../blue-table/cell/icon-rendering/icon-rendering.component';
import { PriorityRenderingComponent } from '../../blue-table/cell/priority-rendering/priority-rendering.component';
import { VersionRenderingComponent } from '../../blue-table/cell/version-rendering/version-rendering.component';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.css']
})
export class BaseTableComponent implements OnInit, OnDestroy {

  rowData = [];
  columnDefs = [];

  gridApi: GridApi;

  gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    rowData: this.rowData,
    rowHeight: 40,
    getRowStyle(params) {
      if (params.data.colorRow) {
        return {'background-color': params.data.colorRow };
      }
    },
    suppressCellSelection: true,
    suppressNoRowsOverlay: true
  };

  frameworkComponents = {
    emptyOverlayComponent: EmptyOverlayComponent,
    loadingOverlayComponent: LoadingOverlayComponent,

    headerRenderingComponent: HeaderRenderingComponent,

    iconRenderingComponent: IconRenderingComponent,
    colorRenderingComponent: ColorRenderingComponent,
    statusRenderingComponent: StatusRenderingComponent,
    priorityRenderingComponent: PriorityRenderingComponent,

    projectRenderingComponent: ProjectRenderingComponent,
    taskRenderingComponent: TaskRenderingComponent,
    versionRenderingComponent: VersionRenderingComponent
  };
  emptyOverlayComponent = 'emptyOverlayComponent';
  loadingOverlayComponent = 'loadingOverlayComponent';

  emptyOverlayParams: INoRowsOverlayParams;

  constructor(
    protected lightning: LightningService,
    protected sidebarService: SidebarService,
    protected service: BaseTableService
  ) {
    this.lightning.setTableService(this.service);
    this.service.buildService();
  }

  ngOnInit(): void {
    this.service.getRecords().subscribe((records: Project[] | Task[] | Version[]) => {
      this.rowData = records;
    });
    this.service.getLoaded().subscribe((loaded: boolean) => {
      if (!this.gridApi) {
        return; // TODO
      }
      if (loaded) {
        this.manageFinalOverlay();
      } else {
        this.gridApi.showLoadingOverlay();
      }
    });
    this.sidebarService.getLeftbarStatus().subscribe((leftbarStatus: LeftbarStatus) => {
      if (!this.gridApi) {
        return; // TODO
      }
      this.gridApi.showLoadingOverlay();
      setTimeout(() => {
        this.sizeColumnsToFit();
        this.manageFinalOverlay();
      }, 200);
    });
  }
  ngOnDestroy(): void {
    this.service.closeInformations();
  }

  gridReady(params: any): void {
    this.gridApi = params.api;
    this.sizeColumnsToFit();
  }
  sizeColumnsToFit(): void {
    this.gridApi.sizeColumnsToFit();
  }

  openInformations(event: RowClickedEvent): void {
    this.service.openInformations(event);
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

  manageFinalOverlay(): void {
    this.gridApi.hideOverlay();
    if (this.rowData.length === 0) {
      this.gridOptions.suppressNoRowsOverlay = false;
      this.gridApi.showNoRowsOverlay();
    }
  }
}
