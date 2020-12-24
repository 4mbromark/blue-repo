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
      headerName: '',
      field: 'icon',
      minWidth: 70,
      maxWidth: 70,
      cellRenderer: 'iconRenderingComponent',
      sortable: true
    },
    {
      headerName: '',
      field: 'color',
      minWidth: 70,
      maxWidth: 70,
      cellRenderer: 'colorRenderingComponent',
      sortable: true
    },
    {
      headerName: '',
      field: 'priority',
      minWidth: 70,
      maxWidth: 70,
      cellRenderer: 'priorityRenderingComponent',
      sortable: true
    },
    {
      headerName: 'Stato',
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
      headerName: 'Progetto',
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
      headerName: 'Superprogetto',
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
      headerName: 'Data Inizio',
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
      headerName: 'Data Fine',
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
      headerName: 'Data Inserimento',
      field: 'insertDate',
      minWidth: 200,
      cellRenderer: (data) => {
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
      headerName: '',
      field: 'icon',
      minWidth: 70,
      maxWidth: 70,
      cellRenderer: 'iconRenderingComponent',
      sortable: true
    },
    {
      headerName: '',
      field: 'color',
      minWidth: 70,
      maxWidth: 70,
      cellRenderer: 'colorRenderingComponent',
      sortable: true
    },
    {
      headerName: '',
      field: 'priority',
      minWidth: 70,
      maxWidth: 70,
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
      headerName: 'Progetto',
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
      headerName: 'Attività',
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
      headerName: 'Data Inserimento',
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
}
