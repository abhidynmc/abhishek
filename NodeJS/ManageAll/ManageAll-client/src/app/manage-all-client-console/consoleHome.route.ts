import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsoleHomeComponent } from './console-home/console-home.component';
import { PageNotFoundComponent } from '../other/pageNotFound.component';
import { ConsoleLandingComponent } from './console-landing/console-landing.component';
import { EmployeeEffortComponent } from './employee-effort/employee-effort.component';
import { IncidentDashboardComponent } from './incident-dashboard/incident-dashboard.component';
import { IncidentLoggingComponent } from './incident-logging/incident-logging.component';
import { MetricsDashboardComponent }  from './metrics-dashboard/metrics-dashboard.component';
import { UserSettingComponent } from './user-setting/user-setting.component';

const consoleRoutes: Routes = [
    { path: 'console-home', component: ConsoleHomeComponent, children:[
      { path: '', component: ConsoleLandingComponent},
      { path: 'console-landing', component: ConsoleLandingComponent},
      { path: 'employee-effort', component: EmployeeEffortComponent},
      { path: 'incident-dashboard', component: IncidentDashboardComponent},
      { path: 'incident-logging', component: IncidentLoggingComponent},
      { path: 'matrics-dashboard', component: MetricsDashboardComponent},
      { path: 'user-setting', component: UserSettingComponent}
    ]},
    { path: '', redirectTo:'/home', pathMatch:'full'}
  ];

  export const consoleRouting: ModuleWithProviders = RouterModule.forChild(consoleRoutes);

