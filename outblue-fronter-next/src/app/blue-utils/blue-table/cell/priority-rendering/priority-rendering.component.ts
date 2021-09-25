import { LightningService } from 'src/app/blue-utils/blue-service/lightning.service';
import { PriorityList } from './../../../blue-enum/priority/priority-list';
import { BaseCellComponent } from './../../../blue-base/base-cell/base-cell.component';
import { Component, OnInit } from '@angular/core';
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { Clipboard } from '@angular/cdk/clipboard';
import { Priority } from 'src/app/blue-utils/blue-object/priority/Priority';

@Component({
  selector: 'app-priority-rendering',
  templateUrl: './priority-rendering.component.html',
  styleUrls: ['./priority-rendering.component.css']
})
export class PriorityRenderingComponent extends BaseCellComponent implements OnInit {

  labels = LanguageLabel;

  priority: Priority;

  constructor(
    protected lightning: LightningService,
    protected clipboard: Clipboard
  ) {
    super(lightning, clipboard);
  }

  ngOnInit(): void {
    this.setPriority(this.params.value);
  }

  setPriority(priority: number) {
    this.priority = PriorityList.get(priority);
    if (priority !== null) {
      this.value = this.priority.title;
    }
  }

  changePriority(priority: number) {
    this.saving = true;
    this.service.changePriority(this.params.data.id, priority).then(() => {
      this.setPriority(priority);
      this.saving = false;
    });
  }
}
