import { RowData } from '../RowData';

export class Licence extends RowData {
  code: string;
  serial: string;

  title?: string;
  description?: string;
}
