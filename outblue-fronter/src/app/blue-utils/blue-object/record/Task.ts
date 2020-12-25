import { RowDataTable } from './../RowDataTable';

export class Task extends RowDataTable {
  type: string;
  name: string;
  status: string;
  number: string;
  priority: string;
  taskOf: number;
  version: number;
  description: string;
}
