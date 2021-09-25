import { Config } from './blue-utils/blue-enum/word/config';
import { AuthenticationGuardService as AuthGuard } from './blue-utils/blue-service/auth/guard/auth-guard.service';
import { BlueLoginComponent } from './blue-login/blue-login.component';
import { TasklistComponent } from './blue-modules/tasklist/tasklist.component';
import { RoutingUrl } from './blue-utils/blue-routing/routing-url';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuardService as LoginGuard } from './blue-utils/blue-service/auth/guard/login-guard.service';
import { ProjectsComponent } from './blue-modules/projects/projects.component';

const username = localStorage.getItem(Config.LOCAL_STORAGE_USERNAME) || '';

const routes: Routes = [
  { path: RoutingUrl.LOGIN_PAGE, component: BlueLoginComponent, canActivate: [LoginGuard] },

  { path: username , children: [
    { path: RoutingUrl.ADMIN_MODULE, component: TasklistComponent },
    { path: RoutingUrl.PROJECTS_MODULE, component: ProjectsComponent },
    { path: RoutingUrl.TASKLIST_MODULE, component: TasklistComponent },
    { path: '', redirectTo: RoutingUrl.TASKLIST_MODULE, pathMatch: 'full' },
    { path: '**', redirectTo: RoutingUrl.TASKLIST_MODULE, pathMatch: 'full' },
  ], canActivate: [AuthGuard]},

  /*{ path: RoutingUrl.TASKLIST_MODULE, redirectTo: RoutingUrl.TASKLIST_MODULE_USR, pathMatch: 'full' },*/

  { path: '', redirectTo: RoutingUrl.LOGIN_PAGE, pathMatch: 'full' }, // redirect to `first-component`
  /* { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard]}, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
