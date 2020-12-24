import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/blue-utils/blue-service/language.service';
import { SidebarButton } from 'src/app/blue-utils/blue-object/button/SidebarButton';
import { SidebarService, LeftbarStatus } from './blue-sidebar.service';
import { List } from 'src/app/blue-utils/blue-enum/list';

@Component({
  selector: 'app-sidebar',
  templateUrl: './blue-sidebar.component.html',
  styleUrls: ['./blue-sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  buttons = List.SIDEBAR_BUTTONS;

  ls: LeftbarStatus;

  selectedButton = this.buttons[0];

  constructor(
    private sidebarService: SidebarService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.sidebarService.getLeftbarStatus().subscribe((leftbarStatus: LeftbarStatus) => {
      this.ls = leftbarStatus;
    });
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

  setSidebarSelectedButton(selectedButton: SidebarButton): void {
    this.selectedButton = selectedButton;
  }

  setSidebarOpened(): void {
    this.sidebarService.setLeftbarOpened();
  }

  setSidebarExtended(): void {
    this.sidebarService.setLeftbarExtended();
  }

}
