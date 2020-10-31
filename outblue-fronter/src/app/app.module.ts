import { IconsModules } from './e-icons-modules';
import { AngularModules } from './e-angular-modules';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopbarComponent } from './blue-topbar/blue-topbar.component';
import { ModulesSelectorComponent } from './blue-topbar/blue-modules-selector/blue-modules-selector.component';
import { ProjectSwitchComponent } from './blue-topbar/blue-project-switch/blue-project-switch.component';
import { UserActionsComponent } from './blue-topbar/blue-user-actions/blue-user-actions.component';
import { SearchBarComponent } from './blue-topbar/blue-search-bar/blue-search-bar.component';
import { SidebarComponent } from './blue-sidebar/blue-sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ModulesSelectorComponent,
    ProjectSwitchComponent,
    UserActionsComponent,
    SearchBarComponent,
    SidebarComponent
  ],
  imports: [
    AngularModules,
    IconsModules,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
