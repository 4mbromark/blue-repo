import { RowData } from './RowData';

export class RowDataTable extends RowData {
  name: string;

  status: string;
  priority: string;
  percentage: number;

  icon: string;
  color: string;
  colorRow: string;
}
