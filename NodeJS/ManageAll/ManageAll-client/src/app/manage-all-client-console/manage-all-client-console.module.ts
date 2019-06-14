import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConsoleHomeComponent } from './console-home/console-home.component';
import { consoleRouting } from './consoleHome.route';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule, MatRadioButton } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatMenuModule } from '@angular/material/menu';
import { ConsoleLandingComponent } from './console-landing/console-landing.component';
import { IncidentDashboardComponent } from './incident-dashboard/incident-dashboard.component';
import { MetricsDashboardComponent } from './metrics-dashboard/metrics-dashboard.component';
import { IncidentLoggingComponent } from './incident-logging/incident-logging.component';
import { EmployeeEffortComponent } from './employee-effort/employee-effort.component';
import { UserSettingComponent } from './user-setting/user-setting.component';


@NgModule({
  imports: [
    CommonModule, 
    consoleRouting,
    NgxPermissionsModule, 
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    ConsoleHomeComponent, 
    ConsoleLandingComponent, 
    IncidentDashboardComponent, 
    MetricsDashboardComponent, 
    IncidentLoggingComponent, 
    EmployeeEffortComponent, 
    UserSettingComponent],
    exports : [ RouterModule ]
})
export class ManageAllClientConsoleModule { }
