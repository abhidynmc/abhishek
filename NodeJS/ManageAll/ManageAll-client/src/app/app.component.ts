import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginPopupComponent} from './login-popup/login-popup.component';;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  title = 'ManageAll-client';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    console.log("In App Component");
   // const dialogRef = this.dialog.open(LoginPopupComponent);
    // setTimeout(() => this.dialog.open(LoginPopupComponent));

    setTimeout(() => this.dialog.open(LoginPopupComponent, { panelClass: 'custom-dialog-container' }).afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }));
  }
  
}
