export interface IOrganizationRole {
    roleName:string;
}

export class OrganizationRole implements IOrganizationRole{
    constructor(public roleName:string){}
}