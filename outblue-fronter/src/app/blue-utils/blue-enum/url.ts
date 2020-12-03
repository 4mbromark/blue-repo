export class Url {
  public static BASE_REST = 'outblue/';
  public static BASE_FETCH = 'fetch/';

  public static USERS_REST = Url.BASE_REST + 'users/';
  public static USERS_EXISTS_REST = Url.USERS_REST + 'exists/';
  public static USERS_LOGIN_REST = Url.USERS_REST + 'login/';

  public static LICENCE_REST = Url.BASE_REST + 'licence/';
  public static LICENCE_FETCH_REST = Url.LICENCE_REST + Url.BASE_FETCH;

  public static PROJECTS_REST = Url.BASE_REST + 'projects/';
  public static TASKLIST_REST = Url.BASE_REST + 'tasklist/';
}
