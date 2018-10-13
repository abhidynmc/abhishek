import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOrganizationData, OrganizationData } from './organization-data';
import { IOrganizationDomains, OrganizationDomain } from './iorganization-domains';
import { IOrganizationRole, OrganizationRole } from './iorganization-role';
import { IUserData, UserDataImpl } from './iuser-data';
@Injectable({
  providedIn: 'root'
})
export class SignUpServices {

  constructor(private http: HttpClient) { }

//   organizationData:Array<IOrganizationData>=[
//     new OrganizationData(1,"TCS", 12,"IT Company", "Abhi", 1968, "Delhi", "IT", 34),
//     new OrganizationData(2,"Wipro", 14, "Another IT Company", "Poonam", 1978,"Gurgaon", "IT", 56)
// ];
  // organizationDomains:Array<IOrganizationDomains>=[
  //   new OrganizationDomain("IT-Software"),
  //   new OrganizationDomain("IT-Hardware")
  // ];

  // organizationRoles:Array<IOrganizationRole>=[
  //   new OrganizationRole("CEO"),
  //   new OrganizationRole("CTO"),
  //   new OrganizationRole("Manager")
  // ];
  orgData(){
    return this.http.get<OrganizationData>('http://localhost:3000/api/orgs');
  }

  getOrgDomains(){
    return this.http.get<IOrganizationDomains>('http://localhost:3000/api/orgs/domains');
  }

  getOrgRoles(){
    return this.http.get<IOrganizationRole>('http://localhost:3000/api/users/roles');
  }
  isOrgRegistered(name: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.post('http://localhost:3000/api/organization/search/', JSON.stringify({ name: name }));
    console.log("Calling isOrgRegisterd for name:"+name);
    return this.http.put('http://localhost:3000/api/org/searchByName/', {orgName:name});
    // return this.organizationData.find(c=>  c.name===name).name;
  }
  isEmailRegistered(email: string) {
    console.log("Calling isEmailRegistered for email:"+email);
    return this.http.put('http://localhost:3000/api/user/searchByEmail', {email:email});
    // return this.organizationData.find(c=>  c.name===name).name;
  }
  submitUserData(UserData:UserDataImpl){
    console.log("Called submitUserData UserData: "+JSON.stringify(UserData));
    const q = new Promise((resolve, reject) =>{
      this.http.post<UserDataImpl>('http://localhost:3000/api/user',UserData).subscribe((res)=>{
      if(res._id!=null)    
         resolve(res);
      else
        reject("Error : Failure occur while adding the user.");  
        }
      );
    });
    return q; 
  }
  submitOrganizationData(OrgData:OrganizationData){
    console.log("Called submitOrganizationData OrgData: "+JSON.stringify(OrgData));
    const q = new Promise((resolve, reject) =>{
      this.http.post<OrganizationData>('http://localhost:3000/api/org',OrgData).subscribe((res)=>{
        if(res._id!=null)    
         resolve(res._id);
      else
          reject("Error : Failure occur while adding the user.");  
      })
    });
    return q;
  }
  updateUserData(userData:UserDataImpl){
    console.log("Calling updateUserData for id: "+userData._id);
    const q=new Promise((resolve,reject) =>{
      this.http.post<UserDataImpl>('http://localhost:3000/api/user/update/'+userData._id, userData).subscribe((res)=>{
        if(res._id!=null){
          console.log("Updated user :"+res);
          resolve(res);
      }else{
        reject("Error : Failure occur while updating the user.");
        }
      })
    })
    return q;
  }
}
