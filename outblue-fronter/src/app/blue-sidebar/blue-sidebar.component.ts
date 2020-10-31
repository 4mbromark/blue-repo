import { LanguageService } from 'src/app/blue-language.service';
import { Component } from '@angular/core';
import { SidebarButton, SidebarService, LeftbarStatus } from './blue-sidebar.service';

@Component({
  selector: 'app-blue-sidebar',
  templateUrl: './blue-sidebar.component.html',
  styleUrls: ['./blue-sidebar.component.css']
})
export class SidebarComponent {

  constructor(private sidebarService: SidebarService, private languageService: LanguageService) { }

  gbl(label: string) {
    return this.languageService.getByLanguage(label);
  }

  getSidebarButtons(): SidebarButton[] {
    return this.sidebarService.getSidebarButtons();
  }

  getSidebarStatus(): LeftbarStatus {
    return this.sidebarService.getLeftbarStatus();
  }

  getSidebarSelectedButton(): SidebarButton {
    return this.sidebarService.getLeftbarSelectedButton();
  }

  setSidebarSelectedButton(selected: SidebarButton): void {
    this.sidebarService.setSelected(selected);
  }

  setSidebarOpened(): void {
    this.sidebarService.setLeftbarOpened();
  }

  setSidebarExtended(): void {
    this.sidebarService.setLeftbarExtended();
  }

}
