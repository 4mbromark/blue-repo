import { DialogEntryAdminComponent } from './blue-utils/blue-dialog/dialog-entry/dialog-entry-admin/dialog-entry-admin.component';
import { DialogEntryProjectsComponent } from './blue-utils/blue-dialog/dialog-entry/dialog-entry-projects/dialog-entry-projects.component';
import { Config } from './blue-utils/blue-enum/word/config';
import { AuthGuardService as AuthGuard } from './blue-utils/blue-service/auth/auth-guard.service';
import { BlueLoginComponent } from './blue-login/blue-login.component';
import { TasklistComponent } from './blue-modules/tasklist/tasklist.component';
import { RoutingUrl } from './blue-utils/blue-routing/routing-url';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './blue-utils/blue-404/page-not-found/page-not-found.component';
import { LoginGuardService as LoginGuard } from './blue-utils/blue-service/auth/login-guard.service';

const username = localStorage.getItem(Config.USERNAME) ? localStorage.getItem(Config.USERNAME) : '';

const routes: Routes = [
  { path: RoutingUrl.LOGIN_PAGE, component: BlueLoginComponent, canActivate: [LoginGuard] },

  { path: username , children: [
    {path: 'w', children: [
      { path: RoutingUrl.ADMINISTRATION_WINDOW, component: DialogEntryAdminComponent },
      { path: RoutingUrl.PROJECTS_WINDOW, component: DialogEntryProjectsComponent },
      { path: '', redirectTo: RoutingUrl.TASKLIST_MODULE, pathMatch: 'full' },
      { path: '**', redirectTo: RoutingUrl.TASKLIST_MODULE, pathMatch: 'full' },
    ]},
    { path: RoutingUrl.TASKLIST_MODULE, component: TasklistComponent },
    { path: '', redirectTo: RoutingUrl.TASKLIST_MODULE, pathMatch: 'full' },
    { path: '**', redirectTo: RoutingUrl.TASKLIST_MODULE, pathMatch: 'full' },
  ], canActivate: [AuthGuard]},

  /*{ path: RoutingUrl.TASKLIST_MODULE, redirectTo: RoutingUrl.TASKLIST_MODULE_USR, pathMatch: 'full' },*/

  { path: '', redirectTo: RoutingUrl.LOGIN_PAGE, pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
