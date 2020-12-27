import { LanguageService } from './../../../blue-service/language.service';
import { Component, OnInit } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { IAfterGuiAttachedParams } from 'ag-grid-community';
import { IHeaderParams } from 'ag-grid-community/dist/lib/headerRendering/header/headerComp';

@Component({
  selector: 'app-header-rendering',
  templateUrl: './header-rendering.component.html',
  styleUrls: ['./header-rendering.component.css']
})
export class HeaderRenderingComponent implements IHeaderAngularComp, OnInit {

  params: IHeaderParams;

  value: any;

  sortIcon = '';

  constructor(
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    if (this.params.displayName) {
      this.value = this.gbl(this.params.displayName);
    } else {
      this.value = '---';
    }
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

  refresh(params: IHeaderParams): boolean {
    throw new Error('Method not implemented.');
  }
  agInit(params: IHeaderParams): void {
    this.params = params;
  }
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    throw new Error('Method not implemented.');
  }

  sort() {
    this.params.progressSort(true); // multiple sort = true
    switch (this.sortIcon) {
      case '': {
        this.sortIcon = 'arrow-up';
        break;
      }
      case 'arrow-up': {
        this.sortIcon = 'arrow-down';
        break;
      }
      case 'arrow-down': {
        this.sortIcon = '';
        break;
      }
    }
  }

}
