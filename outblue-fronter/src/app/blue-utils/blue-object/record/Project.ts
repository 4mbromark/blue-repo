import { RowData } from '../RowData';

export class Project extends RowData {
  type: string;
  status: string;
  priority: string;
  name: string;
  nameCode: string;
  nameExtended: string;
  nameCustomized: string;
  subprojectOf: number;
  startDate: Date;
  endDate: Date;
  deadline: Date;
}
