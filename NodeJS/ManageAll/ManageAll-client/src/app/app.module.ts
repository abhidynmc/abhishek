import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material";

import { AppComponent } from './app.component';   
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './other/pageNotFound.component';
import { appRouting } from './app.routing';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { SignUpPopupComponent } from './sign-up-popup/sign-up-popup.component';
//import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
    LoginPopupComponent,
    SignUpPopupComponent
  //  LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting, 
    BrowserAnimationsModule,
    MatDialogModule, 
    ReactiveFormsModule
    //RouterModule.forRoot(appRoutes, {useHash:true})
  ],
  entryComponents: [
    //LoginPageComponent, 
    LoginPopupComponent,
    SignUpPopupComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
