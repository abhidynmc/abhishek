import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatMenu } from '@angular/material/menu';
import { DataService }  from '../../app.service';
import { UserDataImpl } from '../../sign-up-complete/iuser-data';

@Component({
  selector: 'app-console-home',
  templateUrl: './console-home.component.html',
  styleUrls: ['./console-home.component.css']
})
export class ConsoleHomeComponent implements OnInit {

  userData: UserDataImpl;
  constructor(public appService : DataService) { 
    this.appService.changeNavControl(false);
    this.appService.currentLoginData.subscribe(data => this.userData=data);
  }

  ngOnInit() {
    this.appService.changeNavControl(false);
    this.appService.currentLoginData.subscribe(data => this.userData=data);
  }

}
