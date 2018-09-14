import { Component, OnInit } from '@angular/core';
import { DataService } from '../app.service';
import { IOrganizationData } from './organization-data';
import { IOrganizationDomains } from './iorganization-domains';
import { IOrganizationRole } from './iorganization-role';
import { MatDialog } from '@angular/material';
import { SignUpServices } from './sign-up-services.service';
import { IPersonalForm } from '../sign-up-complete/ipersonal-form';
import { IEmployeeForm } from '../sign-up-complete/iemployee-form';
import { IOrganizationForm } from '../sign-up-complete/iorganization-form';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

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
  signUpEmployeeForm: FormGroup;
  employee:boolean;
  OtherRole:boolean;
  organization:boolean;
  organizationRoles:Array<IOrganizationRole>;
  organizationDomains:Array<IOrganizationDomains>;
  organizationFormData:any;
  employeeFormData:any;
  personalFormData:any;

  // organizationData:Array<IOrganizationData>=[
  //     new OrganizationData(1,"TCS", 12,"IT Company", "Abhi", 1968, "Delhi", "IT", 34),
  //     new OrganizationData(2,"Wipro", 14, "Another IT Company", "Poonam", 1978,"Gurgaon", "IT", 56)
  // ];
  organizationData:Array<IOrganizationData>;
  constructor(private data: DataService, public dialog: MatDialog, fb: FormBuilder, public signUpServices: SignUpServices) {

    this.data.currentSignUpFormData.subscribe(data => this.signUpData=data);
    if(this.signUpData==null){
      this.signUpData.email=null;
      this.signUpData.password=null;
    }

    this.organizationData=this.signUpServices.orgData();
    this.organizationDomains=this.signUpServices.getOrgDomains();
    this.organizationRoles=this.signUpServices.getOrgRoles();

    this.OtherRole=false;

    this.signUpPersonalForm=fb.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email:[this.signUpData.email, Validators.compose([Validators.required, Validators.email])],
      contactNo:[null, Validators.compose([Validators.required,  Validators.pattern(/^-?(0|[1-9]\d*)?$/)])],
      password: [this.signUpData.password, Validators.compose([Validators.required, this.passwordValueValidator])],
      confirm_password: [null, [Validators.required]]
    }, {validator: this.passwordConfirming});

    this.signUpOrganizationForm=fb.group({
      organizationName:[null, Validators.required,this.isOrganizationUnique.bind(this)],
      aboutOrganization:[null, Validators.required],
      founder:[null, Validators.required],
      foundedIn:[null, Validators.compose([Validators.required, Validators.maxLength(4)])],
      location:[null, Validators.required],
      domain:[null, Validators.required],
      yourRole:[null, Validators.required],
      companySize: [null, Validators.required]
    });

    this.signUpEmployeeForm=fb.group({
      organizationName:[null, Validators.required]
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
  isOrganizationUnique(control: FormControl) {
    console.log("Checking for organization name");
    const q = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.signUpServices.isOrgRegisterd(control.value).subscribe((resp) => {
          console.log("Response :"+resp);
          if(resp==null){
            // console.log("Response Inside:"+resp);
            resolve(resp);
          }else{
            resolve({'isOrgUnique': true}); 
          }
        }, (err) => {
          resolve({'error': true});
        });
          
      }, 1000);
    });
    return q;
  }
  SubmitSignUpOrganizationForm(value: any):void{
    console.log('Reactive Form Data: ');
    console.log(value);
    // let jsonString = JSON.stringify(this.signUpOrganizationForm.value);
    // this.organizationFormData=<IOrganizationData>JSON.parse(jsonString);
    this.organizationFormData=<IOrganizationData>this.signUpOrganizationForm.value;
  }
  SubmitSignUpEmployeeForm(value: any):void{
    console.log('Reactive Form Data: ')
    console.log(value);
    this.employeeFormData=<IEmployeeForm>this.signUpEmployeeForm.value;
  }
  SubmitSignUpPersonalForm(value: any):void{
    console.log('Reactive Form Data: ');
    console.log(value);
    this.personalFormData=<IPersonalForm>this.signUpPersonalForm.value;
  }
  submitFinal(){
    console.log("From Personal Form:"+this.personalFormData.password);
    if(this.employee)
    console.log("From Employee Form"+this.employeeFormData.organizationName.name);
    else if(this.organization)
    console.log("From organization form"+this.organizationFormData.companySize);
  }
  chooseRole(data: String){
    if(data=='employee'){
      this.employee=true;
      this.organization=false;
    }else if(data=='organization'){
      this.employee=false;
      this.organization=true;
    }
  }
  clickOthers(){
    this.OtherRole=!this.OtherRole;
  }
  ngOnInit() {
  }

}
