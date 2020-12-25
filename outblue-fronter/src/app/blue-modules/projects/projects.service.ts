import { BaseTableService } from './../../blue-utils/blue-base/base-table/base-table.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Url } from 'src/app/blue-utils/blue-enum/url';
import { ProjectService } from 'src/app/blue-utils/blue-service/project.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends BaseTableService {

  httpBaseUrl = Url.PROJECTS_GETBY_REST;
  httpBaseFetch = Url.PROJECTS_FETCH_REST;

  constructor(protected projectService: ProjectService, protected http: HttpClient) {
    super(projectService, http);
  }
}
