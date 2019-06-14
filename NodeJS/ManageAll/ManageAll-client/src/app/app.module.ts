import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import {NgxPermissionsModule} from 'ngx-permissions';
import 'hammerjs';
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
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
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
