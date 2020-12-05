import { PermitService } from './../../blue-utils/blue-service/permit.service';
import { List } from '../../blue-utils/blue-enum/list';
import { Injectable } from '@angular/core';
import { SidebarButton } from 'src/app/blue-utils/blue-object/button/SidebarButton';;

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

  constructor(private permitService: PermitService) {
    this.leftbarStatus = new LeftbarStatus();
    this.permitService.getSidebarPermit().subscribe((permit: boolean) => {
      this.leftbarStatus.enabled = permit;
    });
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
