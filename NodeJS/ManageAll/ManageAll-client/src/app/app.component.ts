import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {LoginPopupComponent} from './login-popup/login-popup.component';
import { DataService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  title = 'ManageAll-client';
  navVisible:boolean;
  constructor(public dialog: MatDialog, public appService:DataService) {
    this.appService.changeNavControl(true);
    this.appService.currentNavControl.subscribe(data => this.navVisible=data);
  }

  openDialog() {
    console.log("In App Component");
 
    setTimeout(() => this.dialog.open(LoginPopupComponent, { panelClass: 'custom-dialog-container' }).afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }));
  }
  ngOnInit(){
  }
}
