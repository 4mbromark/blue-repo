import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseTableService } from 'src/app/blue-utils/blue-base/base-table/base-table.service';
import { Url } from 'src/app/blue-utils/blue-enum/url';

@Injectable({
  providedIn: 'root'
})
export class TasklistService extends BaseTableService {

  httpBaseUrl = Url.TASKLIST_REST;

  constructor(protected http: HttpClient) {
    super(http);
  }
}
