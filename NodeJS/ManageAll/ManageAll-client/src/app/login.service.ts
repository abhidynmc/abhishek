import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginParams,ILoginParams } from './login-popup/ilogin-params';
import { LoginResultImpl } from './login-popup/ilogon-result';

@Injectable({
  providedIn: 'root'
})
export class LoginServices {

  constructor(private http:HttpClient) { }

  login(loginParams:LoginParams) {
    console.log("Calling login service for email: "+loginParams.email);
    const q=new Promise((resolve,reject) =>{
      this.http.put<LoginResultImpl>('http://localhost:3000/api/login', loginParams).subscribe((res)=>{
        if(res.result=="success"){
          console.log("Login Successfull for user :"+loginParams.email);
          resolve(res);
      }
      // else if(res.result=="loginfailure"){
      //     console.log("Login failure for user :"+loginParams.email);
      //     resolve(res);
      // }
      else{
        console.log("Login failure for user :"+loginParams.email);
        resolve(res);
        }
      })
    })
    return q;
  }
}
