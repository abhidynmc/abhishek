import { Component, OnInit } from '@angular/core';
import { DataService } from '../app.service';
import { IOrganizationData, OrganizationData } from './organization-data';
import { IOrganizationDomains } from './iorganization-domains';
import { IOrganizationRole } from './iorganization-role';
import { MatDialog } from '@angular/material/dialog';
import { SignUpServices } from './sign-up-services.service';
import { IPersonalForm } from '../sign-up-complete/ipersonal-form';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { IUserData,UserDataImpl } from './iuser-data';
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
  organizationFormData:OrganizationData;
  employeeFormData:any;
  personalFormData:any;
  userResData:UserDataImpl;
  organizationData:Array<IOrganizationData>;
  organizationRoles:Array<IOrganizationRole>;
  organizationDomains:Array<IOrganizationDomains>;
  agreementFlag:boolean;
  constructor(private data: DataService, public dialog: MatDialog, fb: FormBuilder, public signUpServices: SignUpServices) {

    this.data.currentSignUpFormData.subscribe(data => this.signUpData=data);
    if(this.signUpData==null){
      this.signUpData.email=null;
      this.signUpData.password=null;
    }

    this.signUpServices.orgData().subscribe((res)=>{
      this.organizationData=JSON.parse(JSON.stringify(res));
    });
    this.signUpServices.getOrgDomains().subscribe((res)=>{
      this.organizationDomains=JSON.parse(JSON.stringify(res));
    });
    this.signUpServices.getOrgRoles().subscribe((res)=>{
      this.organizationRoles=JSON.parse(JSON.stringify(res));
    })
    this.OtherRole=false;
    this.agreementFlag=false;
    
    this.signUpPersonalForm=fb.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email:[this.signUpData.email, Validators.compose([Validators.required, Validators.email]), this.isEmailUnique.bind(this)],
      contactNo:[null, Validators.compose([Validators.required,  Validators.pattern(/^-?(0|[1-9]\d*)?$/)])],
      password: [this.signUpData.password, Validators.compose([Validators.required, this.passwordValueValidator])],
      confirm_password: [null, [Validators.required]]
    }, {validator: this.passwordConfirming});

    this.signUpOrganizationForm=fb.group({
      orgName:[null, Validators.required,this.isOrganizationUnique.bind(this)],
      about:[null, Validators.required],
      founder:[null, Validators.required],
      foundedIn:[null, Validators.compose([Validators.required, Validators.maxLength(4), Validators.pattern(/^-?(0|[1-9]\d*)?$/)])],
      location:[null, Validators.required],
      domain:[null, Validators.required],
      role:[null, Validators.required],
      companySize: [null, Validators.compose([Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)])]
    });

    this.signUpEmployeeForm=fb.group({
      orgName:[null, Validators.required]
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
        this.signUpServices.isOrgRegistered(control.value).subscribe((resp) => {
          console.log("Response :"+resp);
          if(resp==false){
            // console.log("Response Inside:"+resp);
            resolve(resp);
          }else if(resp==true){
            resolve({'isOrgUnique': true}); 
             
          }
        }, (err) => {
          resolve({'error': true});
        });
          
      }, 1000);
    });
    return q;
  }
  isEmailUnique(control: FormControl) {
    console.log("Checking for email");
    const q = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.signUpServices.isEmailRegistered(control.value).subscribe((resp) => {
          console.log("Response :"+resp);
          if(resp==false){
            // console.log("Response Inside:"+resp);
            resolve(resp);
          }else if(resp==true){
            resolve({'isEmailUnique': true}); 
             
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
    this.organizationFormData=<OrganizationData>this.signUpOrganizationForm.value;
  }
  SubmitSignUpEmployeeForm(value: any):void{
    console.log('Reactive Form Data: ')
    console.log("Organization :"+JSON.stringify(this.signUpEmployeeForm.value.orgName));
    this.employeeFormData=<OrganizationData>JSON.parse(JSON.stringify(this.signUpEmployeeForm.value.orgName));
    console.log("Employee Form data:"+this.employeeFormData);
  } 
  SubmitSignUpPersonalForm(value: any):void{
    console.log('Reactive Form Data: ');
    console.log(value);
    this.personalFormData=<IPersonalForm>this.signUpPersonalForm.value;
  }
  submitFinal(){
    console.log("From Personal Form:"+this.personalFormData.password);
    
    if(this.employee){
    console.log("From Employee Form"+this.employeeFormData._id);
    let userData= new UserDataImpl(null, this.personalFormData.firstname, this.personalFormData.lastname, this.personalFormData.email,
        this.personalFormData.contactNo, this.personalFormData.password, "Employee", this.employeeFormData._id);    
        this.signUpServices.submitUserData(userData).then(val=>{
        this.userResData=JSON.parse(JSON.stringify(val));
      console.log("Response :"+this.userResData);
    });
    
    }
    else if(this.organization){
    console.log("From organization form"+this.organizationFormData.companySize);
    let userData=
      new UserDataImpl(null, this.personalFormData.firstname, this.personalFormData.lastname, this.personalFormData.email,
        this.personalFormData.contactNo, this.personalFormData.password, this.organizationFormData.role.roleName, this.organizationFormData.orgName);
        this.signUpServices.submitUserData(userData).then(val=>{
          this.userResData=<UserDataImpl>JSON.parse(JSON.stringify(val));
          this.organizationFormData.owner=this.userResData._id;
          this.signUpServices.submitOrganizationData(this.organizationFormData).then(orgId=>{
            this.userResData.organization=JSON.parse(JSON.stringify(orgId));
            this.signUpServices.updateUserData(this.userResData);
          });
        });
      }
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
  openPrivacyPolicy(){
    console.log("In Sign Up Complete Component");
    setTimeout(() => this.dialog.open(PrivacyPolicyComponent, { panelClass: 'custom-dialog-container' }).afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }));
  }
  ngOnInit() {
  }

}
