import { LanguageLabel } from '../blue-language/language-labels';

export class Column {
  public static CONTROLLER = {
    headerName: null,
    headerComponent: 'headerControllerRenderingComponent',
    field: 'stamp',
    width: 80,
    minWidth: 80,
    maxWidth: 80,
    flex: null,
    sortable: true
  };

  public static COLOR = {
    headerName: null,
    headerComponent: 'headerRenderingComponent',
    headerComponentParams: {
      displayName: null,
      enableMenu: false,
      enableSorting: false
    },
    field: 'color',
    width: 70,
    minWidth: 70,
    maxWidth: 70,
    flex: null,
    cellRenderer: 'colorRenderingComponent',
    sortable: true
  };

  public static PRIORITY = {
    headerName: LanguageLabel.HEADER_PRIORITY,
    headerComponent: 'headerRenderingComponent',
    headerComponentParams: {
      enableMenu: true,
      enableSorting: true
    },
    field: 'priority',
    width: 150,
    minWidth: 150,
    maxWidth: 150,
    flex: null,
    cellRenderer: 'priorityRenderingComponent',
    sortable: true
  };

  public static STATUS = {
    headerName: LanguageLabel.HEADER_STATUS,
    headerComponent: 'headerRenderingComponent',
    headerComponentParams: {
      enableMenu: true,
      enableSorting: true
    },
    field: 'status',
    width: 150,
    minWidth: 150,
    maxWidth: 150,
    flex: null,
    cellRenderer: 'statusRenderingComponent',
    sortable: true,
    resizable: true
  };

  public static PERCENTAGE = {
    headerName: LanguageLabel.HEADER_PERCENTAGE,
    headerComponent: 'headerRenderingComponent',
    headerComponentParams: {
      enableMenu: false,
      enableSorting: true
    },
    field: 'percentage',
    minWidth: 200,
    flex: 1,
    cellRenderer: 'percentageRenderingComponent',
    sortable: true,
    resizable: true
  };

  public static INSERT_DATE = {
    headerName: LanguageLabel.HEADER_INSERTDATE,
    headerComponent: 'headerRenderingComponent',
    headerComponentParams: {
      enableMenu: false,
      enableSorting: true
    },
    field: 'insertDate',
    width: 200,
    minWidth: 200,
    maxWidth: 200,
    flex: null,
    cellRenderer: (data) => {
      return new Date(data.value).toLocaleString();
    },
    sortable: true,
    resizable: true
  };
}
