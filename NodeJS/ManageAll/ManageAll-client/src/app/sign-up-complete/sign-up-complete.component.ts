import { Component, OnInit } from '@angular/core';
import { DataService } from '../app.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-sign-up-complete',
  templateUrl: './sign-up-complete.component.html',
  styleUrls: ['./sign-up-complete.component.css']
})
export class SignUpCompleteComponent implements OnInit {

  signUpEmail:String;
  signUpPassword:String;
  signUpData:any;
  constructor(private data: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    setInterval(()=> this.dialog.closeAll());
    this.data.currentSignUpFormData.subscribe(data => this.signUpData=data);
    console.log("Sign Up Data from DataService :"+this.signUpData);
  }

}
