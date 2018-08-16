import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginPopupComponent} from '../login-popup/login-popup.component';
 
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.openDialog();
  }

  openDialog() {
    console.log("In LoginPageComponent");
   // const dialogRef = this.dialog.open(LoginPopupComponent);
    // setTimeout(() => this.dialog.open(LoginPopupComponent));

    setTimeout(() => this.dialog.open(LoginPopupComponent).afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }));
  }
}
