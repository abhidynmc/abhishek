import {Component, OnInit, OnDestroy} from '@angular/core';
// import { LoginPopupComponent } from '../login-popup/login-popup.component';
// import { MatDialog } from '@angular/material';

@Component({
    selector:'contact-page',
    template:'<h2>I am from Contact Page</h2>'
})

export class ContactComponent{
   
    page="Contact";
    //constructor(public dialog : MatDialog) { }

   
//   ngOnInit() {
//     console.log("In Popup Handler Component");
//     setTimeout(() => this.dialog.open(LoginPopupComponent, { panelClass: 'custom-dialog-container' }).afterClosed().subscribe(result => {
//       console.log(`Dialog result: ${result}`);
//     }));
//   }
//   ngOnDestroy(): void {
//     this.dialog.closeAll();
// }
}

