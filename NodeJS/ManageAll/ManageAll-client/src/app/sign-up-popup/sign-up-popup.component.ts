import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-popup',
  templateUrl: './sign-up-popup.component.html',
  styleUrls: ['./sign-up-popup.component.css']
})
export class SignUpPopupComponent implements OnInit {

  signUpForm : FormGroup;
  constructor(fb : FormBuilder) {
    this.signUpForm=fb.group({
      'name'  : [null, Validators.required],
      'email' : [null, Validators.compose([Validators.required, Validators.email])],
      'password'  : [null]
    })
   }

  ngOnInit() {
  }

}
