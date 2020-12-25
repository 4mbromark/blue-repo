import { BaseTableService } from './../../blue-utils/blue-base/base-table/base-table.service';
import { Injectable } from '@angular/core';
import { Url } from 'src/app/blue-utils/blue-enum/url';
import { ProjectService } from 'src/app/blue-utils/blue-service/project.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VersionsService extends BaseTableService {

  httpBaseUrl = Url.VERSIONS_GETBY_REST;
  httpBaseFetch = Url.VERSIONS_FETCH_REST;

  constructor(protected projectService: ProjectService, protected http: HttpClient) {
    super(projectService, http);
  }
}
