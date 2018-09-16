export interface IOrganizationDomains {
    domainName:string;
}

export class OrganizationDomain implements IOrganizationDomains{

    constructor(public domainName:string){}
}