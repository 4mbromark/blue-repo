import { LanguageService } from '../../blue-utils/blue-language/language.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './blue-toolbar.component.html',
  styleUrls: ['./blue-toolbar.component.css']
})
export class ToolbarComponent {

  search = false;

  constructor(private languageService: LanguageService) { }

  gbl(label: string) {
    return this.languageService.getByLanguage(label);
  }

}
