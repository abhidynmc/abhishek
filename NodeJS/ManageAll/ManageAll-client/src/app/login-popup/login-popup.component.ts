import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SignUpPopupComponent } from '../sign-up-popup/sign-up-popup.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit {

  loginForm : FormGroup;
  constructor(public dialog: MatDialog, fb: FormBuilder) {
    this.loginForm = fb.group({
      // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
      'email' : [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.required]
    })
   }

  submitForm(value: any):void{
    console.log('Reactive Form Data: ')
    console.log(value);
  }

  ngOnInit() {
  }

  openSignUp(){
    console.log("In LoginPopupComponent");
    setTimeout(() => this.dialog.open(SignUpPopupComponent, { panelClass: 'custom-dialog-container' }).afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }));
  }
}
