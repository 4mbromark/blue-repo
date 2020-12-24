import { LeftbarStatus, SidebarService } from './blue-frame/blue-sidebar/blue-sidebar.service';
import { PermitService } from './blue-utils/blue-service/permit.service';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'outblue-fronter';

  topbarEnabled = false;

  ls: LeftbarStatus = new LeftbarStatus();

  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    event.preventDefault();
    return false;
  }
  constructor(
    private permitService: PermitService,
    private sidebarService: SidebarService
  ) {
    this.permitService.getTopbarPermit().subscribe((permit: boolean) => {
      this.topbarEnabled = permit;
    });
  }

  ngOnInit(): void {
    this.sidebarService.getLeftbarStatus().subscribe((leftbarStatus: LeftbarStatus) => {
      this.ls = leftbarStatus;
    });
  }
}
