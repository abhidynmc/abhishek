import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleHomeComponent } from './console-home/console-home.component';
import { consoleRouting } from './consoleHome.route';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  imports: [
    CommonModule, 
    consoleRouting,
    NgxPermissionsModule
  ],
  declarations: [ConsoleHomeComponent]
})
export class ManageAllClientConsoleModule { }
