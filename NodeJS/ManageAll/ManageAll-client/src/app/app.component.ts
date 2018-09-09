import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginPopupComponent} from './login-popup/login-popup.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  title = 'ManageAll-client';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    console.log("In App Component");
 
    setTimeout(() => this.dialog.open(LoginPopupComponent, { panelClass: 'custom-dialog-container' }).afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }));
  }
  ngOnInit(){
  }
}
