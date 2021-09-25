import { RowDataTable } from './../RowDataTable';

export class Project extends RowDataTable {
  nameCode: string;
  nameExtended: string;
  nameCustomized: string;

  subprojectOf: number;

  startDate: Date;
  endDate: Date;
}
