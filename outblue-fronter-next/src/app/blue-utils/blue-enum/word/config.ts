import { Name } from './name';

export class Config {
  public static ALICE = Name.ALICE.toLowerCase();

  public static OUTBLUE = Name.OUTBLUE.toLowerCase();
  public static YENA = Name.YENA.toLowerCase();

  public static NAME = 'name';
  public static USERNAME = 'username';
  public static MALE = 'm';
  public static FEMALE = 'f';

  public static YEAR = 'year';

  public static PROJECT = 'project-name';

  // LOCAL STORAGE
  public static LOCAL_STORAGE_USERNAME = 'outblue-storage-username';
  public static LOCAL_STORAGE_TOKEN = 'outblue-storage-token';
  public static LOCAL_STORAGE_LANGUAGE = 'outblue-storage-language';
  public static LOCAL_STORAGE_TIMESTAMP = 'outblue-storage-timestamp';
  public static LOCAL_STORAGE_PREFERENCE = 'outblue-storage-preference';
  public static LOCAL_STORAGE_PREFERENCE_USER = 'outblue-storage-preference-user';

  // LANGUAGE LABELS
  public static TOOLTIP = '-tooltip';
  public static DESCRIPTION = '-description';

  // SELECTORS
  public static SLIDER = 'slider';
}
