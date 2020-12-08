import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermitService {

  topbarEnabled: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  sidebarEnabled: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  getTopbarPermit(): Observable<boolean> {
    return this.topbarEnabled.asObservable();
  }

  getSidebarPermit(): Observable<boolean> {
    return this.sidebarEnabled.asObservable();
  }

  setTopbarPermit(permit: boolean): void {
    this.topbarEnabled.next(permit);
  }
  setSidebarPermit(permit: boolean): void {
    this.sidebarEnabled.next(permit);
  }
  setAllFramePermitTo(permit: boolean): void {
    this.topbarEnabled.next(permit);
    this.sidebarEnabled.next(permit);
  }

}
