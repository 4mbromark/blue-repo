import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseTableService } from 'src/app/blue-utils/blue-base/base-table/base-table.service';
import { Url } from 'src/app/blue-utils/blue-enum/url';
import { ProjectService } from 'src/app/blue-utils/blue-service/project.service';

@Injectable({
  providedIn: 'root'
})
export class TasklistService extends BaseTableService {

  httpBaseUrl = Url.TASKLIST_GETBY_REST;
  httpBaseFetch = Url.TASKLIST_FETCH_REST;

  constructor(protected projectService: ProjectService, protected http: HttpClient) {
    super(projectService, http);
  }
}
