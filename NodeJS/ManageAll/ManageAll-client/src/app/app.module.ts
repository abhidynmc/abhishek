import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatTooltipModule, MatStepperModule, MatRadioModule, MatRadioButton
,MatSelectModule, MatCheckboxModule  } from "@angular/material";
import {NgxPermissionsModule} from 'ngx-permissions';

import { DataService } from './app.service';
import { LoginServices } from './login.service';

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
import { TestComponent } from './test/test.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
    LoginPopupComponent,
    SignUpPopupComponent,
    SignUpCompleteComponent,
    TestComponent,
    PrivacyPolicyComponent,
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
    MatCheckboxModule,
    ManageAllClientConsoleModule,
    NgxPermissionsModule.forRoot()
    //RouterModule.forRoot(appRoutes, {useHash:true})
  ],
  entryComponents: [
    LoginPopupComponent,
    SignUpPopupComponent,
    PrivacyPolicyComponent
  ],
  exports:[
    NgxPermissionsModule
  ],
  providers: [SignUpPopupComponent, DataService, LoginServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
