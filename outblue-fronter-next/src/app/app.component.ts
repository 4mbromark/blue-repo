import { SidebarPreference } from './blue-utils/blue-object/preference/SidebarPreference';
import { SidebarService } from './blue-frame/blue-sidebar/blue-sidebar.service';
import { PermitService } from './blue-utils/blue-service/permit.service';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'outblue-fronter-next';

  public topbarEnabled: boolean;
  public sidebarEnabled: boolean;
  public sidebar: SidebarPreference = new SidebarPreference();

  /*@HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    event.preventDefault();
    return false;
  }*/
  constructor(
    private permitService: PermitService,
    private sidebarService: SidebarService
  ) {
    this.permitService.getTopbarPermit().subscribe((enabled: boolean) => {
      this.topbarEnabled = enabled;
    });
    this.permitService.getSidebarPermit().subscribe((enabled: boolean) => {
      this.sidebarEnabled = enabled;
    });
  }

  ngOnInit(): void {
    this.sidebarService.getSidebarPreference().subscribe((sidebarPreference: SidebarPreference) => {
      this.sidebar = sidebarPreference;
    });
  }
}
