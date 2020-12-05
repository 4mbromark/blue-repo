import { PermitService } from './blue-utils/blue-service/permit.service';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'outblue-fronter';

  topbarEnabled = false;

  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    event.preventDefault();
    return false;
  }
  constructor(private permitService: PermitService) {
    this.permitService.getTopbarPermit().subscribe((permit: boolean) => {
      this.topbarEnabled = permit;
    });
  }
}
