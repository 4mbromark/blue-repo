import { Config } from '../blue-enum/word/config';

export class LicenceTag {
  public static NO_LICENCE = 'no-license';

  public static WAITING_FOR_CHECK = 'license-waiting-for-check';
  public static ACTIVE = 'license-active';
  public static EXPIRING = 'license-expiring';
  public static EXPIRED = 'license-expired';

  public static LICENCE_LIMITED_TRIAL = 'limited-trial-license';
  public static LICENCE_EXTENDED_TRIAL = 'extended-trial-license';
  public static LICENCE_LIMITED_BETA = 'limited-beta-license';
  public static LICENCE_EXTENDED_BETA = 'extended-beta-license';
  public static LICENCE_UNLIMITED_BETA = 'unlimited-beta-license';
  public static LICENCE_MONTHLY_RENEWAL = 'monthly-renewal-license';
  public static LICENCE_ANNUAL_RENEWAL = 'annual-renewal-license';
  public static LICENCE_PROMOTIONAL_RENEWAL = 'promotional-renewal-license';
  public static LICENCE_LIFETIME = 'lifetime-license';
  public static LICENCE_LIFETIME_PROMOTIONAL = 'lifetime-promotional-license';
  public static LICENCE_LIFETIME_FREE = 'lifetime-free-license';

  public static LICENCE_SERIAL_BASE = 'HF-' + Config.YEAR + '-';
}
