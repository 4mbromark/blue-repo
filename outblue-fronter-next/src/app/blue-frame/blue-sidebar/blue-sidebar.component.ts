import { PermitService } from './../../blue-utils/blue-service/permit.service';
import { SidebarPreference } from './../../blue-utils/blue-object/preference/SidebarPreference';
import { OpenWindowAction } from '../../blue-utils/blue-object/button/OpenWindowAction';
import { MatDialog } from '@angular/material/dialog';
import { ProjectService } from 'src/app/blue-utils/blue-service/project.service';
import { SidebarButton } from './../../blue-utils/blue-object/button/SidebarButton';
import { Tag } from 'src/app/blue-utils/blue-enum/word/tag';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarService } from './blue-sidebar.service';
import { List } from 'src/app/blue-utils/blue-enum/list';
import { MatMenuTrigger } from '@angular/material/menu';
import { StorageService } from 'src/app/blue-utils/blue-service/storage.service';
import { Config } from 'src/app/blue-utils/blue-enum/word/config';
import { RoutingService } from 'src/app/blue-utils/blue-service/routing.service';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-sidebar',
  templateUrl: './blue-sidebar.component.html',
  styleUrls: ['./blue-sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild('showButtons') showButtons: MatExpansionPanel;
  @ViewChild('searchTrigger', {read: MatMenuTrigger}) search: MatMenuTrigger;
  @ViewChild('filterTrigger', {read: MatMenuTrigger}) filter: MatMenuTrigger;

  tags = Tag;

  public buttons: SidebarButton[] = List.SIDEBAR_BUTTONS;
  public buttonsTool: SidebarButton[] = List.SIDEBAR_TOOLS;

  public enabled: boolean;
  public sidebar: SidebarPreference;
  public loaded = false;

  public selectedButton: SidebarButton;

  public username = this.localStorage.get(Config.LOCAL_STORAGE_USERNAME) ? this.localStorage.get(Config.LOCAL_STORAGE_USERNAME) : '';

  constructor(
    private sidebarService: SidebarService,
    private permitService: PermitService,
    private projectService: ProjectService,
    private routingService: RoutingService,
    private localStorage: StorageService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.permitService.getSidebarPermit().subscribe((enabled: boolean) => {
      this.enabled = enabled;
    });
    this.sidebarService.getSidebarPreference().subscribe((sidebarPreference: SidebarPreference) => {
      this.sidebar = sidebarPreference;
    });
    this.projectService.getLoaded().subscribe((loaded: boolean) => {
      this.loaded = loaded;
    });
    this.selectedButton = this.buttons.find(button => this.routingService.getUrl().includes(button.routerlink));
  }

  public setSidebarSelectedButton(selectedButton: SidebarButton): void {
    this.selectedButton = selectedButton;
    this.sidebarService.updateLastModule(selectedButton.routerlink);
  }

  public getSidebarTitle(button: SidebarButton): string {
    switch (button.tag) {
      case Tag.SIDEBAR_TOGGLE: {
        return this.sidebar.extended ? button.alt.title : button.title;
      }
      case Tag.SIDEBAR_NEW: {
        return this.showButtons ? this.showButtons.expanded ? button.alt.title : button.title : button.title;
      }
      default: {
        return button.title;
      }
    }
  }
  public getSidebarIcon(button: SidebarButton): string {
    switch (button.tag) {
      case Tag.SIDEBAR_TOGGLE: {
        return this.sidebar.extended ? button.alt.icon : button.icon;
      }
      case Tag.SIDEBAR_NEW: {
        return this.showButtons ? this.showButtons.expanded ? button.alt.icon : button.icon : button.icon;
      }
      default: {
        return button.icon;
      }
    }
  }
  public getSidebarTooltip(button: SidebarButton): string {
    switch (button.tag) {
      case Tag.SIDEBAR_TOGGLE: {
        return this.sidebar.extended ? button.alt.tooltip : button.tooltip;
      }
      case Tag.SIDEBAR_NEW: {
        return this.showButtons ? this.showButtons.expanded ? button.alt.tooltip : button.tooltip : button.tooltip;
      }
      default: {
        return button.tooltip;
      }
    }
  }
  public getSidebarAction(button: SidebarButton): void {
    switch (button.tag) {
      case Tag.SIDEBAR_NEW: {
        this.showButtons.toggle();
        break;
      }
      case Tag.SIDEBAR_NEW_PROJECT:
      case Tag.SIDEBAR_NEW_TASK: {
        this.openWindowForm(button.form);
        this.showButtons.close();
        break;
      }
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

  private openWindowForm(window: OpenWindowAction) {
    this.dialog.open(window.component, {
      width: '30%',
      // height: '60%',
      data: {
        icon: window.icon,
        title: window.title
      }
    });
  }
}
