import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './other/pageNotFound.component';
//import { LoginPageComponent} from './login-page/login-page.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { SignUpCompleteComponent } from './sign-up-complete/sign-up-complete.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'app-login-popup', component: LoginPopupComponent},
  { path: 'app-sign-up-complete', component: SignUpCompleteComponent},
  { path: '', redirectTo:'/home', pathMatch:'full'}
  // { path: '**', component: PageNotFoundComponent },
];
// export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash:true});

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash:false});