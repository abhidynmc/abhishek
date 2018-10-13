import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsoleHomeComponent } from './console-home/console-home.component';
import { PageNotFoundComponent } from '../other/pageNotFound.component';

const consoleRoutes: Routes = [
    { path: 'console-home', component: ConsoleHomeComponent },
    { path: '', redirectTo:'/home', pathMatch:'full'}
  ];

  export const consoleRouting: ModuleWithProviders = RouterModule.forChild(consoleRoutes);