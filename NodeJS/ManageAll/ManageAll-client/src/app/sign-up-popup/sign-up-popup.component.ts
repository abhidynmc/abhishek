import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../app.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-sign-up-popup',
  templateUrl: './sign-up-popup-material.component.html',
  styleUrls: ['./sign-up-popup.component.css']
})

export class SignUpPopupComponent implements OnInit {

  passwordPattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,100})/";
  
  signUpForm : FormGroup;

  constructor(fb : FormBuilder,public router: Router,public data: DataService, public dialog: MatDialog) {
    this.signUpForm=fb.group({
      'email' : [null, Validators.compose([Validators.required, Validators.email])],
      'password'  : [null, Validators.compose([Validators.required, this.passwordValueValidator])]
    });
    this.router=router;
    this.data=data;
   }

  ngOnInit() {
  }

 passwordStrengthValidator(passwordPat : String): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (control.value !== undefined && control.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,100})/)) {
            return { 'passwordStrength': true };
        }
        return null;
    };
  }

  passwordValueValidator(control) {
    if (control.value != undefined) {
      if (!control.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,100})/)) {
        return { 'passwordStrength': true };
      }
    }
  }
  
  submitSignUpForm(value: any):void{
    console.log('Reactive Form Data: ')
    console.log(value);
    this.data.changeSignUpFormData(this.signUpForm.value) ;
    setTimeout(()=> this.dialog.closeAll());
    this.router.navigateByUrl('/app-sign-up-complete');
  }
}
