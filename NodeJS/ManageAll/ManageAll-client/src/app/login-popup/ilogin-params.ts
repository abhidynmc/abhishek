export interface ILoginParams {
    email:String,
    password:String
}

export class LoginParams implements ILoginParams{
    constructor(public email:string, public password:string){}
}