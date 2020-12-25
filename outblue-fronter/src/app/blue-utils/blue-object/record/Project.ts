import { RowDataTable } from './../RowDataTable';

export class Project extends RowDataTable {
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
