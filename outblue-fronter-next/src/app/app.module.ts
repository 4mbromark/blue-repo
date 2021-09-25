import { AgGridModule } from 'ag-grid-angular';
import { IconsModules } from './e-icons-modules';
import { AngularModules } from './e-angular-modules';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ProjectSwitchComponent } from './blue-frame/blue-topbar/blue-project-switch/blue-project-switch.component';
import { UserActionsComponent } from './blue-frame/blue-topbar/blue-user-actions/blue-user-actions.component';
import { SidebarComponent } from './blue-frame/blue-sidebar/blue-sidebar.component';
import { BlueLoginComponent } from './blue-login/blue-login.component';
import { BlueLoginFormComponent } from './blue-login/blue-login-form/blue-login-form.component';
import { BlueLoginContactsComponent } from './blue-login/blue-login-contacts/blue-login-contacts.component';
import { BlueTopbarComponent } from './blue-frame/blue-topbar/blue-topbar.component';
import { TasklistComponent } from './blue-modules/tasklist/tasklist.component';
import { ColorSelectorComponent } from './blue-utils/blue-standard/selector/color-selector/color-selector.component';
import { LanguageComponent } from './blue-frame/blue-window/language/language.component';
import { PreferenceComponent } from './blue-frame/blue-window/preference/preference.component';
import { MessagingComponent } from './blue-frame/blue-window/messaging/messaging.component';
import { BaseWindowComponent } from './blue-utils/blue-base/base-window/base-window.component';
import { StandardToolbarComponent } from './blue-utils/blue-standard/standard-toolbar/standard-toolbar.component';
import { CommunicationsComponent } from './blue-frame/blue-window/messaging/communications/communications.component';
import { LoginFormRegisterComponent } from './blue-login/blue-login-form-register/login-form-register.component';
import { StandardLicenceBarComponent } from './blue-utils/blue-standard/standard-licence-bar/standard-licence-bar.component';
import { LoginResultComponent } from './blue-login/blue-login-result/login-result.component';
import { StandardProductBarComponent } from './blue-utils/blue-standard/standard-product-bar/standard-product-bar.component';
import { StandardSpinnerComponent } from './blue-utils/blue-standard/standard-spinner/standard-spinner.component';
import { ProjectsSidepanelComponent } from './blue-modules/projects/projects-sidepanel/projects-sidepanel.component';
import { StatusRenderingComponent } from './blue-utils/blue-table/cell/status-rendering/status-rendering.component';
import { ProjectRenderingComponent } from './blue-utils/blue-table/cell/project-rendering/project-rendering.component';
import { BaseCellComponent } from './blue-utils/blue-base/base-cell/base-cell.component';
import { DatePipe } from '@angular/common';
import { ColorRenderingComponent } from './blue-utils/blue-table/cell/color-rendering/color-rendering.component';
import { PriorityRenderingComponent } from './blue-utils/blue-table/cell/priority-rendering/priority-rendering.component';
import { LoadingOverlayComponent } from './blue-utils/blue-table/overlay/loading-overlay/loading-overlay.component';
import { EmptyOverlayComponent } from './blue-utils/blue-table/overlay/empty-overlay/empty-overlay.component';
import { TaskRenderingComponent } from './blue-utils/blue-table/cell/task-rendering/task-rendering.component';
import { ProjectsComponent } from './blue-modules/projects/projects.component';
import { HeaderRenderingComponent } from './blue-utils/blue-table/header/header-rendering/header-rendering.component';
import { PrioritySelectorComponent } from './blue-utils/blue-standard/selector/priority-selector/priority-selector.component';
import { HighFiveColorPaletteModule } from 'hf-color-palette';
import { AuthenticationInterceptorService } from './blue-utils/blue-service/auth/authentication-interceptor.service';
import { StandardSpinnerCellComponent } from './blue-utils/blue-standard/standard-spinner-cell/standard-spinner-cell.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NewProjectFormComponent } from './blue-frame/blue-form/new-project-form/new-project-form.component';
import { StandardProjectChipComponent } from './blue-utils/blue-standard/standard-project-chip/standard-project-chip.component';
import { HeaderControllerRenderingComponent } from './blue-utils/blue-table/header/header-controller-rendering/header-controller-rendering.component';
import { NewTaskFormComponent } from './blue-frame/blue-form/new-task-form/new-task-form.component';
import { PercentageRenderingComponent } from './blue-utils/blue-table/cell/percentage-rendering/percentage-rendering.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

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
    LoginFormRegisterComponent,
    StandardLicenceBarComponent,
    LoginResultComponent,
    StandardProductBarComponent,
    StandardSpinnerComponent,
    ProjectsSidepanelComponent,
    StatusRenderingComponent,
    ProjectRenderingComponent,
    BaseCellComponent,
    ColorRenderingComponent,
    PriorityRenderingComponent,
    LoadingOverlayComponent,
    EmptyOverlayComponent,
    TaskRenderingComponent,
    ProjectsComponent,
    HeaderRenderingComponent,
    PrioritySelectorComponent,
    StandardSpinnerCellComponent,
    NewProjectFormComponent,
    StandardProjectChipComponent,
    HeaderControllerRenderingComponent,
    NewTaskFormComponent,
    PercentageRenderingComponent
  ],
  imports: [
    AngularModules,
    IconsModules,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([
      ColorRenderingComponent,
      StatusRenderingComponent,
      PriorityRenderingComponent,
      ProjectRenderingComponent,
      TaskRenderingComponent
    ]),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    HighFiveColorPaletteModule,

  ],
  providers: [
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    translate: TranslateService
  ) {
    translate.setDefaultLang('it');
  }
}
