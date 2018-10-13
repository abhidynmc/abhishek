import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleHomeComponent } from './console-home/console-home.component';
import { consoleRouting } from './consoleHome.route';

@NgModule({
  imports: [
    CommonModule, 
    consoleRouting
  ],
  declarations: [ConsoleHomeComponent]
})
export class ManageAllClientConsoleModule { }
