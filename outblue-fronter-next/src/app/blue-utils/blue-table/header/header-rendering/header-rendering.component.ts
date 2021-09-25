import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
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

  labels = LanguageLabel;

  params: IHeaderParams;

  value: any;

  enableFilter: boolean;
  enableSort: boolean;

  constructor() { }

  ngOnInit(): void {
    if (this.params.displayName) {
      this.value = this.params.displayName;
    }
    this.enableFilter = this.params.enableMenu;
    this.enableSort = this.params.enableSorting;
  }

  public refresh(params: IHeaderParams): boolean {
    throw new Error('Method not implemented.');
  }
  public agInit(params: IHeaderParams): void {
    this.params = params;
  }
  public afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    throw new Error('Method not implemented.');
  }

  public sort() {
    this.params.progressSort(true); // multiple sort = true
  }
}
