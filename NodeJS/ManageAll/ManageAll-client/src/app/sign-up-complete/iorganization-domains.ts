export interface IOrganizationDomains {
    domainId:number;
    domainName:string;
}

export class OrganizationDomain implements IOrganizationDomains{

    constructor(public domainId: number,public domainName:string){}
}