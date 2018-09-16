export interface IUserData {
    _id:string
    firstname:String,
    lastname:String,
    email:String,
    contactNo:String,
    password:String,
    role:String,
    organization:String, 
}
export class UserDataImpl implements IUserData{
    constructor(public _id:string, public firstname:string,public lastname:string,public email:string,public contactNo:string,
        public password:string,public role:string,public organization:string, ){}
}