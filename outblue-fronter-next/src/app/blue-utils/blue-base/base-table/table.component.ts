import { ColGroupDef, INoRowsOverlayParams } from 'ag-grid-community';

export interface TableComponent {

  columnDefs: ColGroupDef[];

  emptyOverlayParams: INoRowsOverlayParams;

  setColumnState(): void;

  updateColumnState(): void;
}
