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
import { PaletteComponent } from './blue-utils/blue-context/palette/palette.component';
import { LanguageComponent } from './blue-frame/blue-window/language/language.component';
import { PreferenceComponent } from './blue-frame/blue-window/preference/preference.component';
import { MessagingComponent } from './blue-frame/blue-window/messaging/messaging.component';
import { BaseWindowComponent } from './blue-utils/blue-base/base-window/base-window.component';
import { StandardToolbarComponent } from './blue-utils/blue-standard/standard-toolbar/standard-toolbar.component';
import { CommunicationsComponent } from './blue-frame/blue-window/messaging/communications/communications.component';
import { ProjectsComponent } from './blue-frame/blue-projects/projects.component';
import { LoginFormRegisterComponent } from './blue-login/blue-login-form-register/login-form-register.component';
import { StandardLicenceBarComponent } from './blue-utils/blue-standard/standard-licence-bar/standard-licence-bar.component';
import { LoginResultComponent } from './blue-login/blue-login-result/login-result.component';
import { JwtModule } from '@auth0/angular-jwt';
import { PageNotFoundComponent } from './blue-utils/blue-404/page-not-found/page-not-found.component';
import { DialogEntryComponent } from './blue-utils/blue-dialog/dialog-entry/dialog-entry.component';
import { DialogEntryProjectsComponent } from './blue-utils/blue-dialog/dialog-entry/dialog-entry-projects/dialog-entry-projects.component';
import { DialogEntryAdminComponent } from './blue-utils/blue-dialog/dialog-entry/dialog-entry-admin/dialog-entry-admin.component';


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
    PaletteComponent,
    MessagingComponent,
    LanguageComponent,
    PreferenceComponent,
    BaseWindowComponent,
    StandardToolbarComponent,
    CommunicationsComponent,
    ProjectsComponent,
    ProjectsPreferenceComponent,
    LoginFormRegisterComponent,
    StandardLicenceBarComponent,
    LoginResultComponent,
    PageNotFoundComponent,
    DialogEntryComponent,
    DialogEntryProjectsComponent,
    DialogEntryAdminComponent
  ],
  imports: [
    AngularModules,
    IconsModules,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
