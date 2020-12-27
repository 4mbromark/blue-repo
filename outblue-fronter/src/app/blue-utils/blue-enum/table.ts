import { LanguageLabel } from '../blue-language/language-labels';
import { Tag } from './word/tag';

export class Table {
  public static PROJECTS_TABLE = [
    {
      headerName: 'N°',
      field: 'stamp',
      minWidth: 70,
      maxWidth: 70,
      sortable: true
    },
    {
      headerName: null,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        displayName: null,
        enableSorting: true
      },
      field: 'icon',
      minWidth: 70,
      maxWidth: 70,
      cellRenderer: 'iconRenderingComponent',
      sortable: true
    },
    {
      headerName: null,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        displayName: null,
        enableSorting: true
      },
      field: 'color',
      minWidth: 70,
      maxWidth: 70,
      cellRenderer: 'colorRenderingComponent',
      sortable: true
    },
    {
      headerName: LanguageLabel.HEADER_PRIORITY,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        enableSorting: true
      },
      field: 'priority',
      minWidth: 100,
      cellRenderer: 'priorityRenderingComponent',
      sortable: true
    },
    {
      headerName: LanguageLabel.HEADER_STATUS,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        enableSorting: true
      },
      field: 'status',
      minWidth: 150,
      cellRenderer: 'statusRenderingComponent',
      sortable: true,
      resizable: true
    },
    /*{ // personalized types like versions
      headerName: 'Tipo',
      field: 'type',
      minWidth: 150,
      sortable: true,
      resizable: true
    },*/
    {
      headerName: LanguageLabel.HEADER_PROJECT,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        enableSorting: true
      },
      field: 'name',
      minWidth: 400,
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
        enableSorting: true
      },
      field: 'subprojectOf',
      minWidth: 300,
      cellRenderer: 'projectRenderingComponent',
      cellRendererParams: {
        data: {
          nameType: Tag.CHIP
        }
      },
      sortable: true,
      resizable: true
    },
    {
      headerName: LanguageLabel.HEADER_STARTDATE,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        enableSorting: true
      },
      field: 'startDate',
      minWidth: 150,
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
        enableSorting: true
      },
      field: 'endDate',
      minWidth: 150,
      cellRenderer: (data) => {
        if (!data.value) {
          return '';
        }
        return new Date(data.value).toLocaleDateString();
      },
      sortable: true,
      resizable: true
    },
    /*{
      headerName: 'Versione',
      field: 'project',
      width: '120px'
    },*/
    /*{
      headerName: 'Completamento',
      field: 'site',
      width: '200px'
    },*/
    {
      headerName: LanguageLabel.HEADER_INSERTDATE,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        enableSorting: true
      },
      field: 'insertDate',
      minWidth: 200,
      cellRenderer: (data) => {
        return new Date(data.value).toLocaleString();
      },
      sortable: true,
      resizable: true
    },
    {
      headerName: LanguageLabel.HEADER_UPDATEDATE,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        enableSorting: true
      },
      field: 'updateDate',
      minWidth: 200,
      cellRenderer: (data) => {
        if (!data.value) {
          return '';
        }
        return new Date(data.value).toLocaleString();
      },
      sortable: true,
      resizable: true
    }, /*
    {
      headerName: 'Data approvazione',
      field: 'insertDate'
    },
    {
      headerName: 'Data fine',
      field: 'insertDate'
    }*/
  ];

  public static TASKLIST_TABLE = [
    {
      headerName: 'N°',
      field: 'stamp',
      minWidth: 70,
      maxWidth: 70,
      sortable: true
    },
    {
      headerName: null,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        displayName: null,
        enableSorting: true
      },
      field: 'icon',
      minWidth: 70,
      maxWidth: 70,
      cellRenderer: 'iconRenderingComponent',
      sortable: true
    },
    {
      headerName: null,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        displayName: null,
        enableSorting: true
      },
      field: 'color',
      minWidth: 70,
      maxWidth: 70,
      cellRenderer: 'colorRenderingComponent',
      sortable: true
    },
    {
      headerName: LanguageLabel.HEADER_PRIORITY,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        enableSorting: true
      },
      field: 'priority',
      minWidth: 100,
      cellRenderer: 'priorityRenderingComponent',
      sortable: true
    },
    /*{
      headerName: 'Stato',
      field: 'status',
      minWidth: 150,
      cellRenderer: 'statusRenderingComponent',
      sortable: true,
      resizable: true
    },*/
    {
      headerName: LanguageLabel.HEADER_PROJECT,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        enableSorting: true
      },
      field: 'taskOf',
      minWidth: 300,
      cellRenderer: 'projectRenderingComponent',
      cellRendererParams: {
        data: {
          nameType: Tag.CHIP
        }
      },
      sortable: true,
      resizable: true
    },
   /* {
      headerName: 'Progetto principale',
      field: 'project'
    },
    {
      headerName: 'Progetto padre',
      field: 'project'
    },*/
    /*{
      headerName: 'Versione',
      field: 'project',
      width: '120px'
    },*/
    {
      headerName: LanguageLabel.HEADER_TASK,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        enableSorting: true
      },
      field: 'name',
      minWidth: 400,
      cellRenderer: 'taskRenderingComponent',
      cellRendererParams: {
        data: {
          nameType: Tag.TABLE
        }
      },
      sortable: true,
      resizable: true
    },
    /*{
      headerName: 'Completamento',
      field: 'site',
      width: '200px'
    },
    {
      headerName: 'Link',
      field: 'insertDate'
    },*/
    {
      headerName: LanguageLabel.HEADER_INSERTDATE,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        enableSorting: true
      },
      field: 'insertDate',
      minWidth: 200,
      cellRenderer: (data) => {
        return new Date(data.value).toLocaleString();
      },
      sortable: true,
      resizable: true
    },
    /*{
      headerName: 'Data approvazione',
      field: 'insertDate'
    },
    {
      headerName: 'Data inizio',
      field: 'insertDate'
    },
    {
      headerName: 'Data fine',
      field: 'insertDate'
    }*/
  ];

  public static VERSIONS_TABLE = [
    {
      headerName: 'N°',
      field: 'stamp',
      minWidth: 70,
      maxWidth: 70,
      sortable: true
    },
    {
      headerName: null,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        displayName: null,
        enableSorting: true
      },
      field: 'icon',
      minWidth: 70,
      maxWidth: 70,
      cellRenderer: 'iconRenderingComponent',
      sortable: true
    },
    {
      headerName: null,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        displayName: null,
        enableSorting: true
      },
      field: 'color',
      minWidth: 70,
      maxWidth: 70,
      cellRenderer: 'colorRenderingComponent',
      sortable: true
    },
    {
      headerName: LanguageLabel.HEADER_PROJECT,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        enableSorting: true
      },
      field: 'versionOf',
      minWidth: 300,
      cellRenderer: 'projectRenderingComponent',
      cellRendererParams: {
        data: {
          nameType: Tag.CHIP
        }
      },
      sortable: true,
      resizable: true
    },
    {
      headerName: LanguageLabel.HEADER_VERSION,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        enableSorting: true
      },
      field: 'name',
      minWidth: 300,
      cellRenderer: 'versionRenderingComponent',
      sortable: true,
      resizable: true
    },
    {
      headerName: LanguageLabel.HEADER_STARTDATE,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        enableSorting: true
      },
      field: 'from',
      minWidth: 150,
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
        enableSorting: true
      },
      field: 'to',
      minWidth: 150,
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
      headerName: LanguageLabel.HEADER_INSERTDATE,
      headerComponent: 'headerRenderingComponent',
      headerComponentParams: {
        enableSorting: true
      },
      field: 'insertDate',
      minWidth: 200,
      cellRenderer: (data) => {
        return new Date(data.value).toLocaleString();
      },
      sortable: true,
      resizable: true
    },
  ];
}
