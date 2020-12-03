import { RowData } from '../RowData';

export class Project extends RowData {
  idUser: number;
  type: string;
  name: string;
  nameCode: string;
  nameExtended: string;
  nameCustomized: string;
  subprojectOf: number;
  deadline: Date;
}
