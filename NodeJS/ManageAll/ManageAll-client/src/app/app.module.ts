import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatTooltipModule, MatStepperModule, MatRadioModule, MatRadioButton
,MatSelectModule  } from "@angular/material";

import { DataService } from './app.service';

import { AppComponent } from './app.component';   
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './other/pageNotFound.component';
import { appRouting } from './app.routing';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { SignUpPopupComponent } from './sign-up-popup/sign-up-popup.component';
import{ ManageAllClientConsoleModule } from './manage-all-client-console/manage-all-client-console.module';
import { SignUpCompleteComponent } from './sign-up-complete/sign-up-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
    LoginPopupComponent,
    SignUpPopupComponent,
    SignUpCompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule,
    HttpClientModule,
    appRouting, 
    BrowserAnimationsModule,
    MatDialogModule, 
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatIconModule, 
    MatButtonModule,
    MatTooltipModule,
    MatStepperModule,
    MatRadioModule,
    MatSelectModule,
    ManageAllClientConsoleModule
    //RouterModule.forRoot(appRoutes, {useHash:true})
  ],
  entryComponents: [
    LoginPopupComponent,
    SignUpPopupComponent
  ],
  providers: [SignUpPopupComponent, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
