import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../../blue-object/record/Project';
import { Task } from '../../blue-object/record/Task';

@Injectable({
  providedIn: 'root'
})
export class BaseTableService {

  httpBaseUrl: string;

  tableSize = 100;
  infoSize = 0;

  constructor(protected http: HttpClient) { }

  getAllOnRest(): Promise<Project[] | Task[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.httpBaseUrl).subscribe(
        (records: Project[] | Task[]) => {
          resolve(records);
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }

  openInformations(): void {
    this.tableSize = 60;
    this.infoSize = 40;
  }
  openInformationsFull(): void {
    if (this.infoSize === 100) {
      this.openInformations();
    } else {
      this.tableSize = 0;
      this.infoSize = 100;
    }
  }
  closeInformations(): void {
    this.tableSize = 100;
    this.infoSize = 0;
  }
  getTableSize(): number {
    return this.tableSize;
  }
  getInfoSize(): number {
    return this.infoSize;
  }
}
