import { PriorityTag } from './priority-tag';
import { Priority } from '../../blue-object/priority/Priority';
import { LanguageLabel } from '../../blue-language/language-labels';

export class PriorityList {
  public static NONE = {
    code: PriorityTag.NONE,
    title: LanguageLabel.PRIORITY_NONE,
    description: LanguageLabel.PRIORITY_NONE_DESCRIPTION,
    icon: 'times',
    color: 'gray'
  };
  public static HIGHER = {
    code: PriorityTag.HIGHER,
    title: LanguageLabel.PRIORITY_HIGHER,
    description: LanguageLabel.PRIORITY_HIGHER_DESCRIPTION,
    icon: 'angle-double-up',
    color: 'red'
  };
  public static HIGH = {
    code: PriorityTag.HIGH,
    title: LanguageLabel.PRIORITY_HIGH,
    description: LanguageLabel.PRIORITY_HIGH_DESCRIPTION,
    icon: 'angle-up',
    color: 'darkorange'
  };
  public static MEDIUM = {
    code: PriorityTag.MEDIUM,
    title: LanguageLabel.PRIORITY_MEDIUM,
    description: LanguageLabel.PRIORITY_MEDIUM_DESCRIPTION,
    icon: 'bars',
    color: 'green'
  };
  public static LOW = {
    code: PriorityTag.LOW,
    title: LanguageLabel.PRIORITY_LOW,
    description: LanguageLabel.PRIORITY_LOW_DESCRIPTION,
    icon: 'angle-down',
    color: 'blue'
  };
  public static LOWER = {
    code: PriorityTag.LOWER,
    title: LanguageLabel.PRIORITY_LOWER,
    description: LanguageLabel.PRIORITY_LOWER_DESCRIPTION,
    icon: 'angle-double-down',
    color: 'lightblue'
  };

  public static get(priority: number): Priority {
    switch (priority) {
      case PriorityTag.HIGHER: {
        return PriorityList.HIGHER;
      }
      case PriorityTag.HIGH: {
        return PriorityList.HIGH;
      }
      case PriorityTag.MEDIUM: {
        return PriorityList.MEDIUM;
      }
      case PriorityTag.LOW: {
        return PriorityList.LOW;
      }
      case PriorityTag.LOWER: {
        return PriorityList.LOWER;
      }
    }
  }
}
