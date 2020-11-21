import { Component } from '@angular/core';
import { Communication } from 'src/app/blue-utils/blue-object/messaging/Communication';
import { MessagingService } from '../messaging.service';

@Component({
  selector: 'app-communications',
  templateUrl: './communications.component.html',
  styleUrls: ['./communications.component.css']
})
export class CommunicationsComponent {

  constructor(private messagingService: MessagingService) { }

  getCommunications(): Communication[] {
    return this.messagingService.getCommunications();
  }

}
