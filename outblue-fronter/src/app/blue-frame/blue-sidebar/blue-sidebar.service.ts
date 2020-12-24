import { PermitService } from './../../blue-utils/blue-service/permit.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export class LeftbarStatus {
  enabled: boolean;
  opened: boolean;
  extended: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  ls: LeftbarStatus = new LeftbarStatus();
  leftbarStatus: BehaviorSubject<LeftbarStatus> = new BehaviorSubject<LeftbarStatus>(new LeftbarStatus());

  constructor(private permitService: PermitService) {
    this.permitService.getSidebarPermit().subscribe((permit: boolean) => {
      this.ls.enabled = permit;
      this.leftbarStatus.next(this.ls);
    });
    this.setLeftbarOpened(true);
  }

  getLeftbarStatus(): Observable<LeftbarStatus> {
    return this.leftbarStatus.asObservable();
  }

  setLeftbarOpened(opened?: boolean): void {
    if (opened === undefined) {
      this.ls.opened = !this.ls.opened;
    } else {
      this.ls.opened = opened;
    }
    this.leftbarStatus.next(this.ls);
  }

  setLeftbarExtended(): void {
    this.ls.extended = !this.ls.extended;
    this.leftbarStatus.next(this.ls);
  }
}
