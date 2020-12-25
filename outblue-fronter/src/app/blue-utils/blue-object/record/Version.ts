import { RowDataTable } from './../RowDataTable';
import { RowData } from '../RowData';

export class Version extends RowDataTable {
  name: string;
  code: string;
  description: string;
  from: Date;
  to: Date;
}
