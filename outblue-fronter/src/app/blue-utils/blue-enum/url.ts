export class Url {
  public static BASE_REST = 'outblue/';
  public static BASE_FETCH = 'fetch';
  public static BASE_GETBY = 'getby/';
  public static BASE_LOAD = 'load';
  public static BASE_SAVE = 'save';

  public static USERS_REST = Url.BASE_REST + 'users/';
  public static USERS_EXISTS_REST = Url.USERS_REST + 'exists/';
  public static USERS_LOGIN_REST = Url.USERS_REST + 'login/';
  public static USERS_VERIFY_REST = Url.USERS_REST + 'auth/';

  public static LICENCE_REST = Url.BASE_REST + 'licence/';
  public static LICENCE_LOAD_REST = Url.LICENCE_REST + Url.BASE_LOAD;
  public static LICENCE_SAVE_REST = Url.LICENCE_REST + Url.BASE_SAVE;

  public static PREFERENCE_REST = Url.BASE_REST + 'preferences/';
  public static PREFERENCE_LOAD_REST = Url.LICENCE_REST + Url.BASE_LOAD;
  public static PREFERENCE_SAVE_REST = Url.LICENCE_REST + Url.BASE_SAVE;

  public static PROJECTS_REST = Url.BASE_REST + 'projects/';
  public static PROJECTS_FETCH_REST = Url.PROJECTS_REST + Url.BASE_FETCH;
  public static PROJECTS_GETBY_REST = Url.PROJECTS_REST + Url.BASE_GETBY;

  public static TASKLIST_REST = Url.BASE_REST + 'tasklist/';
  public static TASKLIST_FETCH_REST = Url.TASKLIST_REST + Url.BASE_FETCH;
  public static TASKLIST_GETBY_REST = Url.TASKLIST_REST + Url.BASE_GETBY;

  public static VERSIONS_REST = Url.BASE_REST + 'versions/';
  public static VERSIONS_FETCH_REST = Url.VERSIONS_REST + Url.BASE_FETCH;
  public static VERSIONS_GETBY_REST = Url.VERSIONS_REST + Url.BASE_GETBY;
}
