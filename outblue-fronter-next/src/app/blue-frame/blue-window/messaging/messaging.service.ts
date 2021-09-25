// tslint:disable: max-line-length
import { Communication } from '../../../blue-utils/blue-object/messaging/Communication';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  communications: Communication[] = [];

  constructor() { }

  getCommunications(): Communication[] {
    return this.communications;
  }
}
