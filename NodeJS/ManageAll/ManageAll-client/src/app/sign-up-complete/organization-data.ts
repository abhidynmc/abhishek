import { IOrganizationRole, OrganizationRole } from './iorganization-role';
import { IOrganizationDomains, OrganizationDomain } from './iorganization-domains';
export interface IOrganizationData {
    _id: string,
    orgName:String,
    about:String,
    founder:String,
    foundedIn:number,
    location:String,
    companySize:number,
    domain:OrganizationDomain,
    owner:string,
    role:OrganizationRole
}
export class OrganizationData implements IOrganizationData{

    constructor(public _id:string, public orgName:string,  public about:string, 
        public founder:string, public foundedIn:number, public location:string, public companySize:number,public domain:OrganizationDomain, public owner:string
        , public role:OrganizationRole){
            
        }
}

