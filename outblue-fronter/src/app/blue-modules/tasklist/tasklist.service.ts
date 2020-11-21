import { Injectable } from '@angular/core';
import { BaseTableService } from 'src/app/blue-utils/blue-base/base-table/base-table.service';

@Injectable({
  providedIn: 'root'
})
export class TasklistService extends BaseTableService {

  data = [
    {image: '', status: 0, nickname: 'Nome', link: 'Cognome', site: 'try-001', insertDate: new Date('2020-04-20 01:01:01')},
    {image: '', status: 0, nickname: 'Nome', link: 'Cognome', site: 'try-001', insertDate: new Date('2020-04-20 01:01:01')},
    {image: '', status: 0, nickname: 'Nome', link: 'Cognome', site: 'try-001', insertDate: new Date('2020-04-20 01:01:01')},
    {image: '', status: 0, nickname: 'Nome', link: 'Cognome', site: 'try-001', insertDate: new Date('2020-04-20 01:01:01')},
    {image: '', status: 0, nickname: 'Nome', link: 'Cognome', site: 'try-001', insertDate: new Date('2020-04-20 01:01:01')},
    {image: '', status: 0, nickname: 'Nome', link: 'Cognome', site: 'try-001', insertDate: new Date('2020-04-20 01:01:01')},
    {image: '', status: 0, nickname: 'Nome', link: 'Cognome', site: 'try-001', insertDate: new Date('2020-04-20 01:01:01')},
  ];

  constructor() {
    super();
  }
}
