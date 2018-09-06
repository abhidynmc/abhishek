export interface IOrganizationRole {
    roleId:number
    roleName:string;
}

export class OrganizationRole implements IOrganizationRole{
    constructor(public roleId:number,public roleName:string){}
}