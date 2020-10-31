import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatMenuModule,
    MatDividerModule,
    MatButtonModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatRadioModule
  ]
})
export class AngularModules { }
