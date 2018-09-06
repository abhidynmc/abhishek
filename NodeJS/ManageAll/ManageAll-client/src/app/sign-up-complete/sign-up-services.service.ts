import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOrganizationData, OrganizationData } from './organization-data';
import { IOrganizationDomains, OrganizationDomain } from './iorganization-domains';
import { IOrganizationRole, OrganizationRole } from './iorganization-role';

@Injectable({
  providedIn: 'root'
})
export class SignUpServices {

  constructor(private http: HttpClient) { }

  organizationData:Array<IOrganizationData>=[
    new OrganizationData(1,"TCS", 12,"IT Company", "Abhi", 1968, "Delhi", "IT", 34),
    new OrganizationData(2,"Wipro", 14, "Another IT Company", "Poonam", 1978,"Gurgaon", "IT", 56)
];
  organizationDomains:Array<IOrganizationDomains>=[
    new OrganizationDomain(1, "IT-Software"),
    new OrganizationDomain(2, "IT-Hardware")
  ];

  organizationRoles:Array<IOrganizationRole>=[
    new OrganizationRole(1, "CEO"),
    new OrganizationRole(2, "CTO"),
    new OrganizationRole(3, "Manager")
  ];
  orgData(): Array<IOrganizationData>{
    return this.organizationData;
  }

  getOrgDomains():Array<IOrganizationDomains>{
    return this.organizationDomains;
  }

  getOrgRoles():Array<IOrganizationRole>{
    return this.organizationRoles;
  }
  isOrgRegisterd(name: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.post('http://localhost:3000/api/organization/search/', JSON.stringify({ name: name }));
    console.log("Calling isOrgRegisterd for name:"+name);
    return this.http.post('http://localhost:3000/api/organization/search/', {name:name});
    // return this.organizationData.find(c=>  c.name===name).name;
}
}
