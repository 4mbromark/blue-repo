import { LicenceTag } from './licence-tag';

export class LicenceStatus {
  public static NO_LICENCE = { code: LicenceTag.NO_LICENCE };
  public static WAITING_FOR_CHECK = { code: LicenceTag.WAITING_FOR_CHECK };
  public static ACTIVE = { code: LicenceTag.ACTIVE };
  public static EXPIRING = { code: LicenceTag.EXPIRING };
  public static EXPIRED = { code: LicenceTag.EXPIRED };
}
