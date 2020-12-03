import { RowData } from '../RowData';

export class Task extends RowData {
  idProject: number;
  type: string;
  name: string;
  state: string;
  number: string;
  priority: string;
  version: number;
  description: string;
  icon: string;
  color: string;
  rowColor: string;
}
