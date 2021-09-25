import { Column } from './column';
import { LanguageLabel } from '../blue-language/language-labels';
import { Tag } from './word/tag';

export class Table {
   public static PROJECTS_TABLE = [
    Column.CONTROLLER,
    Column.COLOR,
    Column.PRIORITY,
    Column.STATUS,
    {
      headerName: LanguageLabel.HEADER_PROJECT,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        enableMenu: true,
        enableSorting: true
      },
      field: 'name',
      minWidth: 400,
      flex: 5,
      cellRenderer: 'projectRenderingComponent',
      cellRendererParams: {
        data: {
          nameType: Tag.TABLE
        }
      },
      sortable: true,
      resizable: true
    },
    {
      headerName: LanguageLabel.HEADER_SUPERPROJECT,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        enableMenu: true,
        enableSorting: true
      },
      field: 'subprojectOf',
      minWidth: 200,
      flex: 2,
      cellRenderer: 'projectRenderingComponent',
      cellRendererParams: {
        data: {
          nameType: Tag.CHIP
        }
      },
      sortable: true,
      resizable: false
    },
    {
      headerName: LanguageLabel.HEADER_STARTDATE,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        enableMenu: false,
        enableSorting: true
      },
      field: 'startDate',
      width: 170,
      minWidth: 170,
      maxWidth: 170,
      flex: null,
      cellRenderer: (data) => {
        if (!data.value) {
          return '';
        }
        return new Date(data.value).toLocaleDateString();
      },
      sortable: true,
      resizable: true
    },
    {
      headerName: LanguageLabel.HEADER_ENDDATE,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        enableMenu: false,
        enableSorting: true
      },
      field: 'endDate',
      width: 170,
      minWidth: 170,
      maxWidth: 170,
      flex: null,
      cellRenderer: (data) => {
        if (!data.value) {
          return '';
        }
        return new Date(data.value).toLocaleDateString();
      },
      sortable: true,
      resizable: true
    },
    Column.INSERT_DATE
  ];

  public static TASKLIST_TABLE = [
    Column.CONTROLLER,
    Column.COLOR,
    Column.PRIORITY,
    {
      headerName: LanguageLabel.HEADER_TASK,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        enableMenu: true,
        enableSorting: true
      },
      field: 'name',
      minWidth: 400,
      flex: 5,
      cellRenderer: 'taskRenderingComponent',
      cellRendererParams: {
        data: {
          nameType: Tag.TABLE
        }
      },
      sortable: true,
      resizable: true
    },
    {
      headerName: LanguageLabel.HEADER_PROJECT,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        enableMenu: true,
        enableSorting: true
      },
      field: 'taskOf',
      minWidth: 200,
      flex: 2,
      cellRenderer: 'projectRenderingComponent',
      cellRendererParams: {
        data: {
          nameType: Tag.CHIP
        }
      },
      sortable: true,
      resizable: false
    },
    Column.PERCENTAGE,
    Column.INSERT_DATE,
  ];
}
