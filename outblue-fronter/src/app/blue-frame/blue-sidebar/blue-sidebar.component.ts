import { ProjectService } from 'src/app/blue-utils/blue-service/project.service';
import { SidebarButton } from './../../blue-utils/blue-object/button/SidebarButton';
import { Tag } from 'src/app/blue-utils/blue-enum/word/tag';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from 'src/app/blue-utils/blue-service/language.service';
import { SidebarService, LeftbarStatus } from './blue-sidebar.service';
import { List } from 'src/app/blue-utils/blue-enum/list';
import { MatMenuTrigger } from '@angular/material/menu';
import { StorageService } from 'src/app/blue-utils/blue-service/storage.service';
import { Config } from 'src/app/blue-utils/blue-enum/word/config';
import { RoutingService } from 'src/app/blue-utils/blue-service/routing.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './blue-sidebar.component.html',
  styleUrls: ['./blue-sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild('searchTrigger', {read: MatMenuTrigger}) search: MatMenuTrigger;
  @ViewChild('filterTrigger', {read: MatMenuTrigger}) filter: MatMenuTrigger;

  tags = Tag;

  buttons: SidebarButton[] = List.SIDEBAR_BUTTONS;
  buttonsTool: SidebarButton[] = List.SIDEBAR_TOOLS;

  ls: LeftbarStatus;
  loaded = false;

  selectedButton: SidebarButton;

  username = this.localStorage.get(Config.USERNAME) ? this.localStorage.get(Config.USERNAME) : '';

  constructor(
    private sidebarService: SidebarService,
    private projectService: ProjectService,
    private routingService: RoutingService,
    private localStorage: StorageService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.sidebarService.getLeftbarStatus().subscribe((leftbarStatus: LeftbarStatus) => {
      this.ls = leftbarStatus;
    });
    this.projectService.getLoaded().subscribe((loaded: boolean) => {
      this.loaded = loaded;
    });
    this.setSidebarSelectedButton(this.buttons.find(button => this.routingService.getUrl().includes(button.routerlink)));
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

  setSidebarSelectedButton(selectedButton: SidebarButton): void {
    this.selectedButton = selectedButton;
  }

  getSidebarTitle(button: SidebarButton): string {
    return button.tag === Tag.SIDEBAR_TOGGLE && this.ls.extended ? this.gbl(button.alt.title) : this.gbl(button.title);
  }
  getSidebarIcon(button: SidebarButton): string {
    return button.tag === Tag.SIDEBAR_TOGGLE && this.ls.extended ? button.alt.icon : button.icon;
  }
  getSidebarTooltip(button: SidebarButton): string {
    return button.tag === Tag.SIDEBAR_TOGGLE && this.ls.extended ? this.gbl(button.alt.tooltip) : this.gbl(button.tooltip);
  }
  getSidebarAction(button: SidebarButton): void {
    switch (button.tag) {
      case Tag.SIDEBAR_SEARCH: {
        this.search.openMenu();
        break;
      }
      case Tag.SIDEBAR_FILTER: {
        this.filter.openMenu();
        break;
      }
      case Tag.SIDEBAR_RELOAD: {
        this.projectService.reloadAll();
        break;
      }
      case Tag.SIDEBAR_TOGGLE: {
        this.sidebarService.setLeftbarExtended();
        break;
      }
    }
  }
}
