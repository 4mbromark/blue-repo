// tslint:disable: max-line-length
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-selector',
  templateUrl: './icon-selector.component.html',
  styleUrls: ['./icon-selector.component.css']
})
export class IconSelectorComponent implements OnInit {
  @Input() selected: string;

  icons = [
    ['bell', 'bell-slash', 'exclamation', 'exclamation-circle', 'exclamation-triangle', null],
    ['cat', 'crow', 'dog', 'dove', 'dragon', 'fish', 'frog', 'paw', null],
    ['arrow-alt-circle-down', 'arrow-alt-circle-left', 'arrow-alt-circle-right', 'arrow-alt-circle-up', null,
    'chart-line', 'cloud-download-alt', 'cloud-upload-alt', 'download', 'exchange-alt', 'hand-point-right', 'hand-point-up', null,
    'history', 'location-arrow', 'mouse-pointer', 'play', 'random', 'recycle', 'redo-alt', 'reply', 'reply-all', 'share', 'share-alt', 'sync-alt', 'undo-alt', 'upload', null],
    ['circle', 'film', 'headphones', 'microphone', 'microphone-slash', 'music', 'pause', 'play-circle', 'pause-circle', 'stop-circle', 'stop', 'tv', null,
    'video', 'volume-down', 'volume-mute', 'volume-off', 'volume-up', null],
    ['car', 'bus', 'truck', 'motorcycle', 'truck-pickup', 'truck-monster', null] // continua da autumn
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
