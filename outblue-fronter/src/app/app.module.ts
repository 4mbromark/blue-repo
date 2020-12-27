import { AgGridModule } from 'ag-grid-angular';
import { ProjectsPreferenceComponent } from './blue-frame/blue-window/preference/projects-preference/projects-preference.component';
import { IconsModules } from './e-icons-modules';
import { AngularModules } from './e-angular-modules';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { ProjectSwitchComponent } from './blue-frame/blue-topbar/blue-project-switch/blue-project-switch.component';
import { UserActionsComponent } from './blue-frame/blue-topbar/blue-user-actions/blue-user-actions.component';
import { SidebarComponent } from './blue-frame/blue-sidebar/blue-sidebar.component';
import { BlueLoginComponent } from './blue-login/blue-login.component';
import { BlueLoginFormComponent } from './blue-login/blue-login-form/blue-login-form.component';
import { BlueLoginContactsComponent } from './blue-login/blue-login-contacts/blue-login-contacts.component';
import { BlueTopbarComponent } from './blue-frame/blue-topbar/blue-topbar.component';
import { TasklistComponent } from './blue-modules/tasklist/tasklist.component';
import { ColorSelectorComponent } from './blue-utils/blue-standard/selector/palette/color-selector/color-selector.component';
import { LanguageComponent } from './blue-frame/blue-window/language/language.component';
import { PreferenceComponent } from './blue-frame/blue-window/preference/preference.component';
import { MessagingComponent } from './blue-frame/blue-window/messaging/messaging.component';
import { BaseWindowComponent } from './blue-utils/blue-base/base-window/base-window.component';
import { StandardToolbarComponent } from './blue-utils/blue-standard/standard-toolbar/standard-toolbar.component';
import { CommunicationsComponent } from './blue-frame/blue-window/messaging/communications/communications.component';
import { ProjectsAllComponent } from './blue-frame/blue-projects-all/projects-all.component';
import { LoginFormRegisterComponent } from './blue-login/blue-login-form-register/login-form-register.component';
import { StandardLicenceBarComponent } from './blue-utils/blue-standard/standard-licence-bar/standard-licence-bar.component';
import { LoginResultComponent } from './blue-login/blue-login-result/login-result.component';
import { JwtModule } from '@auth0/angular-jwt';
import { PageNotFoundComponent } from './blue-utils/blue-404/page-not-found/page-not-found.component';
import { DialogEntryComponent } from './blue-utils/blue-dialog/dialog-entry/dialog-entry.component';
import { DialogEntryProjectsComponent } from './blue-utils/blue-dialog/dialog-entry/dialog-entry-projects/dialog-entry-projects.component';
import { DialogEntryAdminComponent } from './blue-utils/blue-dialog/dialog-entry/dialog-entry-admin/dialog-entry-admin.component';
import { StandardProductBarComponent } from './blue-utils/blue-standard/standard-product-bar/standard-product-bar.component';
import { BattleshipComponent } from './blue-utils/blue-404/battleship/battleship.component';
import { GameboardComponent } from './blue-utils/blue-404/battleship/gameboard/gameboard.component';
import { StandardSpinnerComponent } from './blue-utils/blue-standard/standard-spinner/standard-spinner.component';
import { ProjectsAllTableComponent } from './blue-frame/blue-projects-all/projects-all-table/projects-all-table.component';
import { ProjectsSidepanelComponent } from './blue-modules/projects/projects-sidepanel/projects-sidepanel.component';
import { StatusRenderingComponent } from './blue-utils/blue-table/cell/status-rendering/status-rendering.component';
import { ProjectRenderingComponent } from './blue-utils/blue-table/cell/project-rendering/project-rendering.component';
import { BaseCellComponent } from './blue-utils/blue-base/base-cell/base-cell.component';
import { DatePipe } from '@angular/common';
import { IconRenderingComponent } from './blue-utils/blue-table/cell/icon-rendering/icon-rendering.component';
import { ColorRenderingComponent } from './blue-utils/blue-table/cell/color-rendering/color-rendering.component';
import { PriorityRenderingComponent } from './blue-utils/blue-table/cell/priority-rendering/priority-rendering.component';
import { LoadingOverlayComponent } from './blue-utils/blue-table/overlay/loading-overlay/loading-overlay.component';
import { EmptyOverlayComponent } from './blue-utils/blue-table/overlay/empty-overlay/empty-overlay.component';
import { TaskRenderingComponent } from './blue-utils/blue-table/cell/task-rendering/task-rendering.component';
import { ProjectsComponent } from './blue-modules/projects/projects.component';
import { VersionsComponent } from './blue-modules/versions/versions.component';
import { VersionRenderingComponent } from './blue-utils/blue-table/cell/version-rendering/version-rendering.component';
import { HeaderRenderingComponent } from './blue-utils/blue-table/header/header-rendering/header-rendering.component';
import { PrioritySelectorComponent } from './blue-utils/blue-standard/selector/priority-selector/priority-selector.component';
import { IconSelectorComponent } from './blue-utils/blue-standard/selector/icon-selector/icon-selector.component';
import { ColorAliceSelectorComponent } from './blue-utils/blue-standard/selector/palette/color-alice-selector/color-alice-selector.component';
import { ColorBasicSelectorComponent } from './blue-utils/blue-standard/selector/palette/color-basic-selector/color-basic-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectSwitchComponent,
    UserActionsComponent,
    SidebarComponent,
    BlueLoginComponent,
    BlueLoginFormComponent,
    BlueLoginContactsComponent,
    BlueTopbarComponent,
    TasklistComponent,
    ColorSelectorComponent,
    MessagingComponent,
    LanguageComponent,
    PreferenceComponent,
    BaseWindowComponent,
    StandardToolbarComponent,
    CommunicationsComponent,
    ProjectsAllComponent,
    ProjectsPreferenceComponent,
    LoginFormRegisterComponent,
    StandardLicenceBarComponent,
    LoginResultComponent,
    PageNotFoundComponent,
    DialogEntryComponent,
    DialogEntryProjectsComponent,
    DialogEntryAdminComponent,
    StandardProductBarComponent,
    BattleshipComponent,
    GameboardComponent,
    StandardSpinnerComponent,
    ProjectsAllTableComponent,
    ProjectsSidepanelComponent,
    StatusRenderingComponent,
    ProjectRenderingComponent,
    BaseCellComponent,
    IconRenderingComponent,
    ColorRenderingComponent,
    PriorityRenderingComponent,
    LoadingOverlayComponent,
    EmptyOverlayComponent,
    TaskRenderingComponent,
    ProjectsComponent,
    VersionsComponent,
    VersionRenderingComponent,
    HeaderRenderingComponent,
    PrioritySelectorComponent,
    IconSelectorComponent,
    ColorAliceSelectorComponent,
    ColorBasicSelectorComponent
  ],
  imports: [
    AngularModules,
    IconsModules,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([
      IconRenderingComponent,
      ColorRenderingComponent,
      StatusRenderingComponent,
      PriorityRenderingComponent,
      ProjectRenderingComponent,
      TaskRenderingComponent
    ]),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        }
       // allowedDomains: ['example.com'],
       // disallowedRoutes: ['http://example.com/examplebadroute/'],
      },
    }),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
