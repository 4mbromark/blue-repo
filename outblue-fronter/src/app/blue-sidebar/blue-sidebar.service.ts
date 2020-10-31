import { LanguageLabels } from './../blue-language.service';
import { Injectable } from '@angular/core';

export class SidebarButton {
  type: 'main' | 'line';
  name?: string;
  icon?: string;
  title?: string;
  link?: string;
}

export class LeftbarStatus {
  enabled: boolean;
  opened: boolean;
  extended: boolean;
}

const SIDEBAR_BUTTONS: SidebarButton[] = [
  { type: 'main', name: LanguageLabels.SIDEBAR_ALL_SHORT, icon: 'tasks', title: LanguageLabels.SIDEBAR_ALL_COMPLETE },
  { type: 'main', name: LanguageLabels.SIDEBAR_CALENDAR_SHORT, icon: 'calendar', title: LanguageLabels.SIDEBAR_CALENDAR_COMPLETE },
];

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  buttons = SIDEBAR_BUTTONS;

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
