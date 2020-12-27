import { LanguageService } from './../../../blue-service/language.service';
import { PriorityList } from './../../../blue-enum/priority/priority-list';
import { Component, Input, OnInit } from '@angular/core';
import { Priority } from 'src/app/blue-utils/blue-object/priority/Priority';

@Component({
  selector: 'app-priority-selector',
  templateUrl: './priority-selector.component.html',
  styleUrls: ['./priority-selector.component.css']
})
export class PrioritySelectorComponent implements OnInit {
  @Input() selected: string;

  priorities: Priority[] = [];

  constructor(
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.priorities.push(PriorityList.HIGHER);
    this.priorities.push(PriorityList.HIGH);
    this.priorities.push(PriorityList.MEDIUM);
    this.priorities.push(PriorityList.LOW);
    this.priorities.push(PriorityList.LOWER);
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

}
