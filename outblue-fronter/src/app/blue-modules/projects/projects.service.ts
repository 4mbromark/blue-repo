import { BaseTableService } from './../../blue-utils/blue-base/base-table/base-table.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from 'src/app/blue-utils/blue-enum/url';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends BaseTableService {

  httpBaseUrl = Url.PROJECTS_REST;

  constructor(protected http: HttpClient) {
    super(http);
  }
}
