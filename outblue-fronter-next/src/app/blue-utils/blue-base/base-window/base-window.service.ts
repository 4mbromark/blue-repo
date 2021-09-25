import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class BaseWindowService {

  constructor(
    private dialog: MatDialog
  ) { }

  close(): void {
    this.dialog.closeAll();
  }
}
