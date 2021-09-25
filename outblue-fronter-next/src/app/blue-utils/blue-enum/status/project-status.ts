import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { Status } from '../../blue-object/status/Status';
import { StatusTag } from './status-tag';

export class ProjectStatus {
  public static CREATED = {
    code: StatusTag.CREATED,
    title: LanguageLabel.PROJECT_CREATED,
    description: LanguageLabel.PROJECT_CREATED_DESCRIPTION,
    backcolor: 'gray'
  };
  public static APPROVAL = {
    code: StatusTag.APPROVAL,
    title: LanguageLabel.PROJECT_APPROVAL,
    description: LanguageLabel.PROJECT_APPROVAL_DESCRIPTION,
    backcolor: 'darkorange'
  };

  public static ACCEPTED = {
    code: StatusTag.ACCEPTED,
    title: LanguageLabel.PROJECT_ACCEPTED,
    description: LanguageLabel.PROJECT_ACCEPTED_DESCRIPTION,
    backcolor: 'green'
  };
  public static REFUSED = {
    code: StatusTag.REFUSED,
    title: LanguageLabel.PROJECT_REFUSED,
    description: LanguageLabel.PROJECT_REFUSED_DESCRIPTION,
    backcolor: 'red'
  };

  public static READY = {
    code: StatusTag.READY,
    title: LanguageLabel.PROJECT_READY,
    description: LanguageLabel.PROJECT_READY_DESCRIPTION,
    backcolor: 'darkorange'
  };
  public static ACTIVE = {
    code: StatusTag.ACTIVE,
    title: LanguageLabel.PROJECT_ACTIVE,
    description: LanguageLabel.PROJECT_ACTIVE_DESCRIPTION,
    backcolor: 'green'
  };
  public static WAITING = {
    code: StatusTag.WAITING,
    title: LanguageLabel.PROJECT_WAITING,
    description: LanguageLabel.PROJECT_WAITING_DESCRIPTION,
    backcolor: 'orange'
  };
  public static SUSPENDED = {
    code: StatusTag.SUSPENDED,
    title: LanguageLabel.PROJECT_SUSPENDED,
    description: LanguageLabel.PROJECT_SUSPENDED_DESCRIPTION,
    backcolor: 'orange'
  };
  public static DELETED = {
    code: StatusTag.DELETED,
    title: LanguageLabel.PROJECT_DELETED,
    description: LanguageLabel.PROJECT_DELETED_DESCRIPTION,
    backcolor: 'red'
  };
  public static TRANSFERRED = {
    code: StatusTag.TRANSFERRED,
    title: LanguageLabel.PROJECT_TRANSFERRED,
    description: LanguageLabel.PROJECT_TRANSFERRED_DESCRIPTION,
    backcolor: 'orange'
  };
  public static COMPLETED = {
    code: StatusTag.COMPLETED,
    title: LanguageLabel.PROJECT_COMPLETED,
    description: LanguageLabel.PROJECT_COMPLETED_DESCRIPTION,
    backcolor: 'green'
  };

  public static get(status: number): Status {
    switch (status) {
      case StatusTag.CREATED: {
        return ProjectStatus.CREATED;
      }
      case StatusTag.APPROVAL: {
        return ProjectStatus.APPROVAL;
      }
      case StatusTag.ACCEPTED: {
        return ProjectStatus.ACCEPTED;
      }
      case StatusTag.REFUSED: {
        return ProjectStatus.REFUSED;
      }
      case StatusTag.READY: {
        return ProjectStatus.READY;
      }
      case StatusTag.ACTIVE: {
        return ProjectStatus.ACTIVE;
      }
      case StatusTag.WAITING: {
        return ProjectStatus.WAITING;
      }
      case StatusTag.SUSPENDED: {
        return ProjectStatus.SUSPENDED;
      }
      case StatusTag.DELETED: {
        return ProjectStatus.DELETED;
      }
      case StatusTag.TRANSFERRED: {
        return ProjectStatus.TRANSFERRED;
      }
      case StatusTag.COMPLETED: {
        return ProjectStatus.COMPLETED;
      }
    }
  }
}
