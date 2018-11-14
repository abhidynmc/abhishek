import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleHomeComponent } from './console-home/console-home.component';
import { consoleRouting } from './consoleHome.route';
import { NgxPermissionsModule } from 'ngx-permissions';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatTooltipModule, MatStepperModule, MatRadioModule, MatRadioButton
  ,MatSelectModule, MatCheckboxModule  } from "@angular/material";
  import {MatMenuModule} from '@angular/material/menu';


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
  declarations: [ConsoleHomeComponent]
})
export class ManageAllClientConsoleModule { }
