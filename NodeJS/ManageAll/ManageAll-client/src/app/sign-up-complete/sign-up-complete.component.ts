import { Component, OnInit } from '@angular/core';
import { DataService } from '../app.service';
import { MatDialog, MatStepper } from '@angular/material';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up-complete',
  templateUrl: './sign-up-complete.component.html',
  styleUrls: ['./sign-up-complete.component.css']
})
export class SignUpCompleteComponent implements OnInit {

  signUpEmail:String;
  signUpPassword:String;
  signUpData:any;
  signUpPersonalForm: FormGroup;
  signUpOrganizationForm: FormGroup;
  constructor(private data: DataService, public dialog: MatDialog, fb: FormBuilder) {
    this.data.currentSignUpFormData.subscribe(data => this.signUpData=data);
    this.signUpPersonalForm=fb.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email:[this.signUpData.email, Validators.compose([Validators.required, Validators.email])],
    //   passwords: fb.group({
    //     password: [null, Validators.compose([Validators.required, this.passwordValueValidator])],
    //     confirm_password: [null, [Validators.required]],
    // }, {validator: this.passwordConfirming}),
    password: [this.signUpData.password, Validators.compose([Validators.required, this.passwordValueValidator])],
    confirm_password: [null, [Validators.required]]
    }, {validator: this.passwordConfirming});

    this.signUpOrganizationForm=fb.group({
      role:[null],
      organization:[null, Validators.required],
      aboutOrganization:[null, Validators.required],
      founder:[null, Validators.required],
      foundedIn:[null, Validators.required],
      location:[null, Validators.required],
      domain:[null, Validators.required],
      yourRole:[null, Validators.required],
      companySize: [null, Validators.required]
    });
   }

   passwordConfirming(c: AbstractControl) : {invalid:boolean}{
    if (c.get('password').value !== c.get('confirm_password').value) {
      c.get('confirm_password').setErrors({'noMatch': true});
        return {invalid: true};
    }
}
  passwordValueValidator(control) {
    if (control.value != undefined) {
      if (!control.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,100})/)) {
        return { 'passwordStrength': true };
      }
    }
  }
  SubmitSignUpOrganizationForm(value: any):void{
    console.log('Reactive Form Data: ')
    console.log(value);
  }
  SubmitSignUpPersonalForm(value: any):void{
    console.log('Reactive Form Data: ')
    console.log(value);
  }
  ngOnInit() {
    setInterval(()=> this.dialog.closeAll());
    // this.data.currentSignUpFormData.subscribe(data => this.signUpData=data);
    // console.log("Sign Up Data from DataService :"+this.signUpData.email);
  }

}
