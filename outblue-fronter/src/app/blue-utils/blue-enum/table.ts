export class Table {
  public static PROJECTS_TABLE = [
    /*{
      headerName: 'N°',
      field: 'stamp',
      width: '70px'
    },
    {
      headerName: '',
      field: 'icon',
      width: '80px'
    },
    {
      headerName: '',
      field: 'stamp',
      width: '80px'
    },
    {
      headerName: 'Priorità',
      field: 'status',
      width: '150px'
    },*/
    /*{
      headerName: 'Stato',
      field: 'status',
      width: '150px'
      cellRendererFramework: StatusTableCellComponent,
      cellRendererParams: {}
    },*/
    {
      headerName: 'Tipo',
      field: 'type'
    },
    {
      headerName: 'Progetto',
      field: 'name'
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
    /*{
      headerName: 'Completamento',
      field: 'site',
      width: '200px'
    },*/
    /*{
      headerName: 'Data inserimento',
      field: 'insertDate'
    },
    {
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

  public static TASKLIST_TABLE = [
    {
      headerName: 'N°',
      field: 'stamp',
      width: '70px'
    },
    {
      headerName: '',
      field: 'icon',
      width: '80px'
    },
    {
      headerName: '',
      field: 'stamp',
      width: '80px'
    },
    {
      headerName: 'Priorità',
      field: 'status',
      width: '150px'
    },
    {
      headerName: 'Stato',
      field: 'status',
      width: '150px'
      /*cellRendererFramework: StatusTableCellComponent,
      cellRendererParams: {}*/
    },
    {
      headerName: 'Progetto',
      field: 'project'
    },
   /* {
      headerName: 'Progetto principale',
      field: 'project'
    },
    {
      headerName: 'Progetto padre',
      field: 'project'
    },*/
    {
      headerName: 'Versione',
      field: 'project',
      width: '120px'
    },
    {
      headerName: 'Attività',
      field: 'link',
      width: '600px'
    },
    {
      headerName: 'Completamento',
      field: 'site',
      width: '200px'
    },
    {
      headerName: 'Link',
      field: 'insertDate'
    },
    {
      headerName: 'Data inserimento',
      field: 'insertDate'
    },
    {
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
    }
  ];
}
