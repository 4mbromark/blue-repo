// tslint:disable: max-line-length
import { ContextButton } from './../../../blue-utils/blue-object/button/ContextButton';
import { LanguageLabels } from 'src/app/blue-utils/blue-language/language-labels';
import { List } from './../../../blue-utils/blue-enum/list';
import { Component, ViewChild } from '@angular/core';
import { Tag } from 'src/app/blue-utils/blue-enum/word/tag';
import { LanguageService } from 'src/app/blue-utils/blue-service/language.service';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-project-switch',
  templateUrl: './blue-project-switch.component.html',
  styleUrls: ['./blue-project-switch.component.css']
})
export class ProjectSwitchComponent {
  @ViewChild('projectBar') projectBar: MatExpansionPanel;

  tags = Tag;

  contextButton = List.PROJECTBAR_CONTEXT_BUTTONS;

  opened = false;

  subProjects = [
  ];

  constructor(private languageService: LanguageService) { }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

  getContextTitle(button: ContextButton) {
    return button.tag === Tag.CONTEXT_TOGGLE && this.opened ? this.gbl(button.alt.title) : this.gbl(button.title);
  }
  getContextIcon(button: ContextButton) {
    return button.tag === Tag.CONTEXT_TOGGLE && this.opened ? button.alt.icon : button.icon;
  }
  getContextTooltip(button: ContextButton) {
    return button.tag === Tag.CONTEXT_TOGGLE && this.opened ? this.gbl(button.alt.tooltip) : this.gbl(button.tooltip);
  }
  getContextAction(button: ContextButton, event: any, projectList: MatExpansionPanel) {
    if (button.tag === Tag.CONTEXT_TOGGLE) {
      this.projectBar.toggle();
    }
    if (button.tag === Tag.CONTEXT_TOGGLEPANEL || button.tag === Tag.CONTEXT_TOGGLEPANEL_NOCOUNT) {
      projectList.toggle();
      event.stopPropagation();
    }
  }
  getContextProjectTooltip(project: ContextButton) {
    return this.gbl(LanguageLabels.CONTEXT_GOTOPROJECT_TOOLTIP) + project.title.toUpperCase();
  }
}
