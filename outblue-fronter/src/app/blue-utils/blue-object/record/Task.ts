import { RowData } from '../RowData';

export class Task extends RowData {
  type: string;
  name: string;
  status: string;
  number: string;
  priority: string;
  taskOf: number;
  version: number;
  description: string;
  icon: string;
  color: string;
  colorRow: string;
}
