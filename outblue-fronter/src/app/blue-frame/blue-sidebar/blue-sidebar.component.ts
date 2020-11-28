import { Component } from '@angular/core';
import { LanguageService } from 'src/app/blue-utils/blue-service/language.service';
import { SidebarButton } from 'src/app/blue-utils/blue-object/button/SidebarButton';
import { SidebarService, LeftbarStatus } from './blue-sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './blue-sidebar.component.html',
  styleUrls: ['./blue-sidebar.component.css']
})
export class SidebarComponent {

  constructor(private sidebarService: SidebarService, private languageService: LanguageService) { }

  gbl(label: string): string {
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
