import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseTableService {

  httpBaseUrl: string;

  tableSize = 100;
  infoSize = 0;

  constructor(protected http: HttpClient) { }

  getAll(): any {
    this.getAllOnRest().then((data: any) => {
      return data;
    });
  }
  getAllOnRest(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.httpBaseUrl).subscribe(
        (data: any) => {
          resolve(data);
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
