import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignUpPopupComponent } from '../sign-up-popup/sign-up-popup.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServices } from '../login.service';
import { LoginParams } from './ilogin-params';
import { LoginResultImpl } from './ilogon-result';
import { DataService } from '../app.service';
import {NgxPermissionsService} from 'ngx-permissions';
import { UserDataImpl } from '../sign-up-complete/iuser-data';
@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup-material.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit, OnDestroy {
  loginResult:LoginResultImpl;
  loginStatus:boolean;
  loginParams:LoginParams;
  loginForm : FormGroup;
  constructor(public dialog: MatDialog, fb: FormBuilder, public loginService: LoginServices, public router:Router
    ,public appService: DataService, private ngxService:NgxPermissionsService) {
    this.loginForm = fb.group({
      // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
      'email' : [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.required]
    })
    this.loginStatus=false;
   }

  submitForm(value: any):void{
    this.loginStatus=false;
    console.log('Reactive Form Data: ')
    console.log(value);
    this.loginParams=new LoginParams(value.email, value.password);
    this.checkLogin(this.loginParams);
  }
  
  openSignUp(){
    console.log("In LoginPopupComponent");
    // this.dialog.closeAll();
    setTimeout(() => this.dialog.open(SignUpPopupComponent, { panelClass: 'custom-dialog-container' }).afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }));
  }

  checkLogin(params:LoginParams){
   this.loginService.login(params).then(res=>{
    this.loginResult=<LoginResultImpl>JSON.parse(JSON.stringify(res));
    console.log("Login result : "+this.loginResult.result);
    if(this.loginResult.result=="success"){
      let userData=JSON.parse(JSON.stringify(this.loginResult.data[0]));
    console.log("Login data: "+userData[0].role);
      this.appService.changeLoginData(userData[0]);
      this.ngxService.loadPermissions([userData[0].role]);
      this.appService.changeNavControl(false);
      this.dialog.closeAll();
      this.router.navigateByUrl('/console-home');
    }else if(this.loginResult.result=="loginFailure"){
      this.loginStatus=true;
    }else{
      this.loginStatus=true;
    }
   })
  }
  ngOnInit() {
    console.log("In login Popup.")
  }

  ngOnDestroy(){
    // this.dialog.closeAll();
  }
}
