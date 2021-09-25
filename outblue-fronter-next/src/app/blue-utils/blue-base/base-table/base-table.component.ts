import { HeaderControllerRenderingComponent } from './../../blue-table/header/header-controller-rendering/header-controller-rendering.component';
import { HeaderRenderingComponent } from './../../blue-table/header/header-rendering/header-rendering.component';
import { TaskRenderingComponent } from './../../blue-table/cell/task-rendering/task-rendering.component';
import { AgGridEvent, ColGroupDef, ColumnApi, ColumnState, INoRowsOverlayParams, RowClickedEvent } from 'ag-grid-community';
import { EmptyOverlayComponent } from './../../blue-table/overlay/empty-overlay/empty-overlay.component';
import { LoadingOverlayComponent } from './../../blue-table/overlay/loading-overlay/loading-overlay.component';
import { ColorRenderingComponent } from './../../blue-table/cell/color-rendering/color-rendering.component';
import { StatusRenderingComponent } from './../../blue-table/cell/status-rendering/status-rendering.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { GridApi, GridOptions } from 'ag-grid';
import { Project } from '../../blue-object/record/Project';
import { Task } from '../../blue-object/record/Task';
import { LightningService } from '../../blue-service/lightning.service';
import { BaseTableService } from './base-table.service';
import { ProjectRenderingComponent } from '../../blue-table/cell/project-rendering/project-rendering.component';
import { PriorityRenderingComponent } from '../../blue-table/cell/priority-rendering/priority-rendering.component';
import { PercentageRenderingComponent } from '../../blue-table/cell/percentage-rendering/percentage-rendering.component';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.css']
})
export class BaseTableComponent implements OnInit, OnDestroy {

  public rowData: Project[] | Task[] = [];
  public columnDefs: ColGroupDef[] = [];

  public gridApi: GridApi;
  public columnApi: ColumnApi;

  public gridOptions: GridOptions = {
    rowData: this.rowData,
    rowHeight: 40,
    getRowStyle(params) {
      if (params.data.colorRow) {
        return { 'background-color': params.data.colorRow };
      }
    },
    columnDefs: this.columnDefs,
    suppressCellSelection: true,
    suppressNoRowsOverlay: true,
    animateRows: true
  };

  public frameworkComponents = {
    emptyOverlayComponent: EmptyOverlayComponent,
    loadingOverlayComponent: LoadingOverlayComponent,

    headerControllerRenderingComponent: HeaderControllerRenderingComponent,
    headerRenderingComponent: HeaderRenderingComponent,

    colorRenderingComponent: ColorRenderingComponent,
    statusRenderingComponent: StatusRenderingComponent,
    priorityRenderingComponent: PriorityRenderingComponent,
    percentageRenderingComponent: PercentageRenderingComponent,

    projectRenderingComponent: ProjectRenderingComponent,
    taskRenderingComponent: TaskRenderingComponent
  };
  public emptyOverlayComponent = 'emptyOverlayComponent';
  public loadingOverlayComponent = 'loadingOverlayComponent';

  protected emptyOverlayParams: INoRowsOverlayParams;

  protected loaded = false;

  constructor(
    protected lightning: LightningService,
    protected service: BaseTableService
  ) {
    this.lightning.setTableService(this.service);
  }

  ngOnInit(): void {
    this.service.buildService();
  }
  ngOnDestroy(): void {
    this.rowData = [];
    this.service.closeInformations();
    this.service.destroyService();
    this.lightning.setTableService(null);
  }

  private loadObservables(): void {
    this.service.getLoaded().subscribe((loaded: boolean) => {
      this.loaded = loaded;
      if (loaded) {
        this.gridApi.hideOverlay();
        if (this.rowData.length === 0) {
          this.gridOptions.suppressNoRowsOverlay = false;
          this.gridApi.showNoRowsOverlay();
        }
      } else {
        this.gridApi.showLoadingOverlay();
      }
    });
    this.service.getRecords().subscribe((records: Project[] | Task[]) => {
      this.rowData = records;
    });
  }

  public gridReady(params: AgGridEvent): void {
    this.gridApi = params.api as unknown as GridApi;
    this.columnApi = params.columnApi as unknown as ColumnApi;
    this.loadObservables();
  }

  protected applyColumnState(state: ColumnState[]): void {
    this.columnApi.applyColumnState({
      state: state,
      applyOrder: true
    });
  }

  protected filterColumnState(): ColumnState[] {
    const state = this.columnApi.getColumnState();
    return state.map((ss) => {
      const s: ColumnState = {};
      s.colId = ss.colId;
      if (ss.width !== this.columnApi.getColumn(ss.colId).getColDef().width) {
        s.width = ss.width;
      }
      if (ss.flex !== this.columnApi.getColumn(ss.colId).getColDef().flex) {
        s.flex = ss.flex;
      }
      if (ss.hide) {
        s.hide = ss.hide;
      }
      if (ss.sort) {
        s.sort = ss.sort;
        s.sortIndex = ss.sortIndex;
      }
      return s;
    });
  }

  public openInformations(event: RowClickedEvent): void {
    this.service.openInformations(event);
  }
  public openInformationsFull(): void {
    this.service.openInformationsFull();
  }

  public getTableSize(): number {
    return this.service.getTableSize();
  }
  public getInfoSize(): number {
    return this.service.getInfoSize();
  }
}
