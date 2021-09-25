import { Component, OnInit } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { IHeaderParams, IAfterGuiAttachedParams } from 'ag-grid-community';
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';

@Component({
  selector: 'app-header-controller-rendering',
  templateUrl: './header-controller-rendering.component.html',
  styleUrls: ['./header-controller-rendering.component.css']
})
export class HeaderControllerRenderingComponent implements IHeaderAngularComp, OnInit {

  labels = LanguageLabel;

  params: IHeaderParams;

  constructor() { }

  ngOnInit(): void {
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
}
