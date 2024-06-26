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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';


import {ClipboardModule} from '@angular/cdk/clipboard';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {AngularSplitModule} from 'angular-split';
import {AgGridModule} from 'ag-grid-angular';

import { NgxSpinnerModule } from 'ngx-spinner';
import { StatusRenderingComponent } from './blue-utils/blue-table/cell/status-rendering/status-rendering.component';

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
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTabsModule,
    MatTooltipModule,
    MatCardModule,
    MatProgressBarModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSliderModule,

    ClipboardModule,

    FormsModule,
    ReactiveFormsModule,

    AngularSplitModule,
    AgGridModule,

    NgxSpinnerModule
  ]
})
export class AngularModules { }
