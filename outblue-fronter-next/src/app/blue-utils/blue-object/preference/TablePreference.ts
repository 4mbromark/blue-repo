import { ColumnState } from 'ag-grid-community';

export class TablePreference {
  state: {
    projects: ColumnState[],
    tasks: ColumnState[]
  };
}
