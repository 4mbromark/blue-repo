import { LanguageService } from './../blue-language.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blue-topbar',
  templateUrl: './blue-topbar.component.html',
  styleUrls: ['./blue-topbar.component.css']
})
export class TopbarComponent {

  search = false;

  constructor(private languageService: LanguageService) { }

  gbl(label: string) {
    return this.languageService.getByLanguage(label);
  }

}
