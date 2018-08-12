import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './other/pageNotFound.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent },
];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash:true});