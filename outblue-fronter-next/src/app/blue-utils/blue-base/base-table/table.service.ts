import { TablePreference } from './../../blue-object/preference/TablePreference';
import { Task } from '../../blue-object/record/Task';
import { Project } from '../../blue-object/record/Project';
import { ColGroupDef, ColumnState } from 'ag-grid-community';

export interface TableService {

  addRecord(record: Project | Task): Promise<void>;

  getColumnState(): ColumnState[];

  updateColumnState(state: ColumnState[]): void;
}
