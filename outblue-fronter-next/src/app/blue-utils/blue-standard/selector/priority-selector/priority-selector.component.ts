  // tslint:disable: no-output-on-prefix
import { LanguageService } from './../../../blue-service/language.service';
import { PriorityList } from './../../../blue-enum/priority/priority-list';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Priority } from 'src/app/blue-utils/blue-object/priority/Priority';

@Component({
  selector: 'app-priority-selector',
  templateUrl: './priority-selector.component.html',
  styleUrls: ['./priority-selector.component.css']
})
export class PrioritySelectorComponent implements OnInit {
  @Input() priority: number;
  @Output() onPriorityChange: EventEmitter<number> = new EventEmitter<number>();

  priorities: Priority[] = [];

  constructor() { }

  ngOnInit(): void {
    this.priorities.push(PriorityList.NONE);
    this.priorities.push(PriorityList.HIGHER);
    this.priorities.push(PriorityList.HIGH);
    this.priorities.push(PriorityList.MEDIUM);
    this.priorities.push(PriorityList.LOW);
    this.priorities.push(PriorityList.LOWER);
  }

  setPriority(event: number): void {
    this.onPriorityChange.emit(event);
  }
}
