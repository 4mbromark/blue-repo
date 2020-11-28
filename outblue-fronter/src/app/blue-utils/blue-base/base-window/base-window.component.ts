import { BaseWindowService } from './base-window.service';
import { Component, HostListener, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-base-window',
  templateUrl: './base-window.component.html',
  styleUrls: ['./base-window.component.css']
})
export class BaseWindowComponent {

  icon: string;
  title: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, protected service: BaseWindowService) {
    this.title = data.title;
    this.icon = data.icon;
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    event.preventDefault();
    return false;
  }

  close(): void {
    this.service.close();
  }

}
