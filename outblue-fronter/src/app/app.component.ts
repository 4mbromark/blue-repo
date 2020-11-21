import { Component, Host, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'outblue-fronter';

  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    event.preventDefault();
    return false;
  }
}
