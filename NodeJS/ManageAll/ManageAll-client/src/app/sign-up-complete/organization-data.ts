export interface IOrganizationData {
    id: number,
    name: string,
    ownerId:number,
    about:string,
    founder:string,
    foundedIn:number,
    location:string,
    domain:string,
    size:number
}
export class OrganizationData implements IOrganizationData{

    constructor(public id:number, public name:string, public ownerId:number, public about:string, 
        public founder:string, public foundedIn:number, public location:string, public domain:string, public size:number){
            
        }
}

