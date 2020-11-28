import { List } from '../../blue-utils/blue-enum/list';
import { Injectable } from '@angular/core';
import { LanguageLabels } from 'src/app/blue-utils/blue-language/language-labels';
import { SidebarButton } from 'src/app/blue-utils/blue-object/button/SidebarButton';
import { Tag } from 'src/app/blue-utils/blue-enum/word/tag';

export class LeftbarStatus {
  enabled: boolean;
  opened: boolean;
  extended: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  buttons = List.SIDEBAR_BUTTONS;

  leftbarStatus: LeftbarStatus;

  selectedButton = this.buttons[0];

  constructor() {
    this.leftbarStatus = new LeftbarStatus();
    this.leftbarStatus.enabled = true;
    this.setLeftbarOpened();
    this.setLeftbarExtended();
  }

  getSidebarButtons(): SidebarButton[] {
    return this.buttons;
  }

  // STATUS
  getLeftbarStatus(): LeftbarStatus {
    return this.leftbarStatus;
  }

  setLeftbarOpened(): void {
    this.leftbarStatus.opened = !this.leftbarStatus.opened;
  }

  setLeftbarExtended(): void {
    // this.leftbarStatus.opened = false;
    // setTimeout(() => {
    this.leftbarStatus.extended = !this.leftbarStatus.extended;
    //  this.leftbarStatus.opened = true;
    // }, time ? time : 400);
  }

  // SELECTED UTILS
  getLeftbarSelectedButton(): SidebarButton {
    return this.selectedButton;
  }

  setSelected(selected: SidebarButton): void {
    if (selected.type === 'main') {
      this.setSidebarSelectedButton(selected);
    }
  }

  setSidebarSelectedButton(selectedButton: SidebarButton): void {
    this.selectedButton = selectedButton;
  }
}
